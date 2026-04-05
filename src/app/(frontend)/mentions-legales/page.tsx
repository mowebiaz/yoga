import './Legal.scss'

export default function LegalMentionsPage() {
  return (
    <main id="legal-page" className="container">
      <h1>Mentions Légales</h1>

      <h2>Informations générales</h2>
      <p>
        Le présent site (ci-après « le Site ») est un projet de démonstration
        réalisé dans le cadre d’un portfolio de développeuse web.
      </p>

      <div className="important">
        💡<span className="text-accent"> Important</span>:<br />« Mel&apos;Yoga
        » est une activité <span className="text-accent">fictive</span>. Les
        contenus (cours, ateliers, retraites, tarifs, horaires, textes de
        présentation, etc.) sont fournis uniquement à titre d’exemple. Aucune
        réservation ni prestation réelle ne peut être effectuée via ce Site.
      </div>

      <p>
        Ce modèle (&quot;template&quot;) a pour seul but d’illustrer ce à quoi
        pourrait ressembler le site d’une professeure de yoga, notamment dans la
        région de Grenoble et alentours.
      </p>

      <h2>Editeur du site</h2>
      <p>Statut de la société : Entrepreneur Individuel</p>
      <p>Nom de la Société : Morgane Couvet</p>
      <p>Nom commercial : MorganeWeb</p>
      <p>Adresse : 11 Boulevard Maréchal Leclerc, 38000 Grenoble</p>
      <p>E-mail : contact@morganeweb.com</p>
      <p>SIRET : 938 955 333 00019</p>
      <p>Responsable de la publication : Morgane Couvet</p>

      <h2>Hébergeur</h2>
      <p>Nom de l&apos;hébergeur : Vercel Inc.</p>
      <p>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
      <p>
        Site web :{' '}
        <a
          href={'https://vercel.com/'}
          target="_blank"
          rel="no-opener no-referrer"
          className="link"
        >
          https://vercel.com/
        </a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble des éléments présents sur le Site (textes, maquettes, mises
        en page, éléments graphiques, logos de démonstration, etc.) est destiné
        à illustrer un projet fictif. Sauf mention contraire :
      </p>
      <ul>
        <li>
          Les textes de présentation ont été rédigés spécifiquement pour ce
          projet.
        </li>
        <li>
          La reproduction, même partielle, des contenus du Site est autorisée
          uniquement dans le cadre d’une utilisation personnelle ou d’un échange
          professionnel autour du portfolio de la développeuse à l’origine du
          projet.
        </li>
        <li>
          Toute réutilisation commerciale nécessite l’accord écrit préalable de
          l’éditeur du Site.
        </li>
      </ul>

      <h2>Crédits photo & visuels</h2>
      <p>
        Les images utilisées sur ce Site ont pour seul but d’illustrer l’univers
        du yoga et du bien-être.
      </p>
      <p>
        Chaque image reste la propriété de son auteur ou de la plateforme qui la
        fournit. Toute reproduction ou réutilisation doit respecter les
        conditions d’utilisation desdites plateformes ou l’autorisation de
        l’auteur.
      </p>
      <ul>
        <li>Unsplash</li>
        <li>Freepik</li>
        
      </ul>

      <h2>Caractère fictif des informations</h2>
      <p>
        Les contenus suivants sont fictifs et n’ont aucune valeur contractuelle
        :
      </p>
      <ul>
        <li>Nom « Mel&apos;Yoga » et identité de la professeure</li>
        <li>
          Descriptions des cours, ateliers, retraites et contenus pédagogiques
        </li>
        <li>Tarifs, formules, disponibilités et modalités de réservation</li>
        <li>
          Coordonnées de contact affichées pour « Mel&apos;Yoga » (téléphone,
          e-mail, etc.)
        </li>
      </ul>
      <p>
        Toute ressemblance avec des personnes ou des activités existantes serait
        purement fortuite.
      </p>

      <h2>Liens externes</h2>
      <p>
        Le Site peut contenir des liens vers d’autres sites. Ces liens sont
        fournis uniquement à titre informatif. L’éditeur du Site n’exerce aucun
        contrôle sur ces sites tiers et ne peut être tenu responsable de leurs
        contenus, pratiques ou politiques de confidentialité.
      </p>

      <h2>Modification des mentions légales</h2>
      <p>
        Les présentes mentions légales peuvent être modifiées à tout moment,
        notamment pour s’adapter à l’évolution des contenus du Site ou de la
        législation en vigueur.
      </p>
      <p><span className="text-underline">Dernière mise à jour:</span>  26/01/2026</p>
    </main>
  )
}
