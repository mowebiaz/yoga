import './Confidentiality.scss'

export default function ConfidentialityPage() {
  return (
    <main
      id="confidentiality"
      className="container"
    >
      <h1>Politique de confidentialité</h1>
      <h2>1. Responsable du traitement</h2>
      <p>
        Ce site est un template. Les messages envoyés via le formulaire de
        contact sont reçus et traités par :{' '}
      </p>
      <div className="contact-info">
        <p>MorganeWeb (Morgane Couvet) </p>
        <p>Email: contact@morganeweb.com</p>
        <p>
          Site :{' '}
          <a
            href="https://morganeweb.com"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://morganeweb.com
          </a>
        </p>
      </div>
      <h2>2. Données collectées</h2>
      <h3>Formulaire de contact</h3>
      <p>
        Lorsque vous utilisez le formulaire de contact, les données suivantes
        sont collectées :
      </p>
      <ul>
        <li>Nom</li>
        <li>Adresse e-mail</li>
        <li>Message</li>
        <li>
          Données techniques minimales liées à l’envoi (par ex. horodatage,
          informations nécessaires au bon acheminement)
        </li>
      </ul>
      <h3>Données techniques (fonctionnement & sécurité)</h3>
      <p>
        Le site peut générer et conserver des journaux techniques (logs)
        nécessaires à : la sécurité, la prévention des abus (spam), le
        diagnostic d’erreurs et la maintenance. Ces logs ne sont pas utilisés à
        des fins de marketing.{' '}
      </p>
      <h2>3. Finalités </h2>
      <p>Les données collectées sont utilisées uniquement pour :</p>
      <ul>
        <li>répondre à votre demande et assurer le suivi des échanges,</li>
        <li> protéger le formulaire contre le spam et sécuriser le site,</li>
        <li> assurer le bon fonctionnement technique et la maintenance. </li>
      </ul>
      <p>Aucune vente de données. Aucune utilisation publicitaire.</p>
      <h2>4. Base légale</h2>
      <p>
        Consentement : lorsque vous cochez la case d’acceptation de la présente
        politique avant l’envoi du formulaire.
      </p>
      <p>
        Intérêt légitime : sécurisation du site, prévention du spam, et gestion
        des demandes entrantes.
      </p>
      <h2>5. Destinataires des données et sous-traitants</h2>
      Les données collectées via le formulaire sont destinées à MorganeWeb afin
      de traiter votre demande et assurer le suivi des échanges. Elles peuvent
      être traitées, uniquement pour les besoins techniques du service, par des
      prestataires agissant en tant que sous-traitants, notamment : un
      prestataire d’hébergement du site, un prestataire de base de données
      (stockage des contenus et/ou données techniques), un prestataire de
      stockage de fichiers (médias), un prestataire d’envoi d’e-mails
      (acheminement des messages du formulaire), le cas échéant, des
      prestataires de maintenance, sécurité, sauvegarde et supervision. Ces
      prestataires n’utilisent pas vos données pour leur propre compte et ne les
      traitent que sur instructions, dans la limite nécessaire à la fourniture
      du service.
      <h2>6. Durée de conservation</h2>
      <p>
        Données du formulaire : conservées le temps nécessaire pour traiter la
        demande et assurer le suivi, puis au maximum 12 mois après le dernier
        contact, sauf obligation légale ou nécessité (ex. litige).
      </p>
      <p>
        Logs techniques : conservés pour une durée limitée, proportionnée aux
        besoins de sécurité et de maintenance.
      </p>
      <h2>7. Vos droits</h2>
      <p>
        Vous disposez des droits suivants (RGPD) : accès, rectification,
        suppression, opposition, limitation, portabilité (selon les cas) et
        retrait du consentement.
      </p>
      Pour exercer vos droits : contact@morganeweb.com
      <h2>8. Cookies et traceurs</h2>
      <p>
        Ce site n’utilise pas de cookies et ne dépose pas de traceurs à des fins
        de mesure d’audience ou de publicité.
      </p>
      <p>
        Lien vers Google Maps Le site peut proposer un lien permettant d’ouvrir
        une adresse dans Google Maps. En cliquant, vous quittez ce site et êtes
        soumis à la politique de confidentialité de Google. Aucun cookie Google
        n’est déposé tant que vous ne visitez pas Google Maps.
      </p>
      <h2>9. Évolutions et outils futurs</h2>
      <p>
        Dans le cadre de l’évolution du site, des outils techniques
        (surveillance, sauvegardes, supervision de base de données…) peuvent
        être ajoutés. Si ces outils entraînent une modification des traitements
        (ou l’ajout de traceurs), cette politique sera mise à jour.
      </p>
      <p><span className="text-underline">Dernière mise à jour:</span> 26/01/2026</p>
    </main>
  )
}
