// src/utilities/formatFrenchDate.ts
import { isValid, parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { fr } from 'date-fns/locale'

type DateInput = string | Date | null | undefined

export type FrenchDateStyle =
  | 'long'       // le 16 janvier 2026
  | 'short'      // le 16 janv. 2026
  | 'numeric'    // 16/01/2026
  | 'monthYear'  // janvier 2026
  | 'weekday'    // vendredi 16 janvier 2026
  | 'withTime'   // le 16 janvier 2026 à 13:30
  | 'time'       // 13:30
  | 'isoDate'    // 2026-01-16

const TZ = 'Europe/Paris'

const patterns: Record<FrenchDateStyle, string> = {
  long: "'le' d MMMM yyyy",
  short: "'le' d MMM yyyy",
  numeric: 'dd/MM/yyyy',
  monthYear: 'MMMM yyyy',
  weekday: 'EEEE d MMMM yyyy',
  withTime: "'le' d MMMM yyyy 'à' HH:mm",
  time: 'HH:mm',
  isoDate: 'yyyy-MM-dd',
}

export function formatFrenchDate(
  input: DateInput,
  style: FrenchDateStyle = 'weekday',
): string {
  if (!input) return ''

  const date = typeof input === 'string' ? parseISO(input) : input
  if (!isValid(date)) return ''

  return formatInTimeZone(date, TZ, patterns[style], { locale: fr })
}
