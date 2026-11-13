import { LegalLanguageBundle } from '../types/i18n';

export const legalEs: LegalLanguageBundle = {
  lang: 'es',
  firstLayer: {
    title: 'Información básica sobre protección de datos',
    rows: [
      {
        label: 'Responsable',
        value:
          '[COMPLETAR: nombre del titular legal / denominación social], con nombre comercial FidePath Expert Services',
      },
      {
        label: 'Finalidad',
        value:
          'Atender la consulta que nos envíes por correo electrónico, teléfono o LinkedIn y, en su caso, preparar una propuesta de nuestros servicios',
      },
      {
        label: 'Legitimación',
        value:
          'Tu consentimiento, otorgado al contactarnos, y, en su caso, la aplicación de medidas precontractuales a petición tuya',
      },
      {
        label: 'Destinatarios',
        value:
          'Proveedores tecnológicos que actúan por cuenta nuestra (alojamiento web y correo electrónico) [COMPLETAR/VALIDAR: nombres de los proveedores]. Ninguna otra cesión, salvo obligación legal. [COMPLETAR/VALIDAR: transferencias internacionales]',
      },
      {
        label: 'Derechos',
        value:
          'Puedes acceder, rectificar y suprimir tus datos, así como ejercer otros derechos, como se explica en la información adicional',
      },
      {
        label: 'Información adicional',
        value: 'Consulta nuestra [Política de privacidad](/es/politica-de-privacidad)',
      },
    ],
  },
  pages: {
    'legal-notice': {
      key: 'legal-notice',
      route: '/es/aviso-legal',
      title: 'Aviso legal',
      lastUpdated: 'Última actualización: [COMPLETAR: fecha de publicación]',
      sections: [
        {
          id: 'section-1',
          heading: '1. Titular del sitio web',
          blocks: [
            {
              type: 'paragraph',
              text: 'En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI), el titular de este sitio web es:',
            },
            {
              type: 'list',
              items: [
                'Nombre / denominación social: [COMPLETAR: titular legal — nombre y apellidos o denominación social]',
                'Nombre comercial: FidePath Expert Services',
                'NIF/NIE/CIF: [COMPLETAR: número de identificación fiscal]',
                'Dirección: Carrer Desbach 3, 1r esquerra, Palma (Balears), España [COMPLETAR/VALIDAR: confirmar que es el domicilio profesional publicable; añadir código postal]',
                'Correo electrónico: joan.perello@fidepath.com',
                'Teléfono: +34 615 847 893 [COMPLETAR/VALIDAR: confirmar el número]',
                'Registro Mercantil (solo sociedades): [COMPLETAR: registro, tomo, folio, hoja — o eliminar si no aplica]',
                'Dominio: fidepath.com [COMPLETAR/VALIDAR: confirmar registro y titularidad]',
                'Datos profesionales (solo si se ejerce una profesión regulada): título oficial español de «Ingeniero de Caminos, Canales y Puertos» (Universitat Politècnica de Catalunya, España); colegio o institución profesional y número [COMPLETAR/VALIDAR: p. ej. CICCP, número — el CV indica 31985; confirmar a qué corresponde]; normas profesionales aplicables [COMPLETAR/VALIDAR]. Eliminar esta línea si se confirma que no aplica.',
              ],
            },
          ],
        },
        {
          id: 'section-2',
          heading: '2. Objeto del sitio web',
          blocks: [
            {
              type: 'paragraph',
              text: 'Este sitio web presenta los servicios de consultoría técnica independiente de FidePath Expert Services: planificación forense, análisis de retrasos en obras de construcción, evaluación de ampliaciones de plazo, análisis de disrupciones, informes periciales independientes y apoyo técnico en reclamaciones y controversias de construcción, para clientes del Reino Unido, Europa y Oriente Medio [COMPLETAR/VALIDAR: alcance de los servicios y territorios], y permite a los visitantes enviar una consulta.',
            },
          ],
        },
        {
          id: 'section-3',
          heading: '3. Naturaleza de la información',
          blocks: [
            {
              type: 'paragraph',
              text: 'El contenido de este sitio web es informativo y técnico. No constituye asesoramiento jurídico ni crea una relación profesional. Cualquier encargo se formaliza por separado en un acuerdo escrito que recoge su alcance, entregables, honorarios y condiciones.',
            },
          ],
        },
        {
          id: 'section-4',
          heading: '4. Condiciones de uso',
          blocks: [
            {
              type: 'paragraph',
              text: 'El acceso a este sitio web es gratuito. Los usuarios se comprometen a hacer un uso lícito y de buena fe, y a no utilizarlo de forma ilícita, perjudicial para terceros o que pueda dañar, sobrecargar o deteriorar el sitio web o su disponibilidad.',
            },
          ],
        },
        {
          id: 'section-5',
          heading: '5. Propiedad intelectual e industrial',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los textos, imágenes, diseño, estructura y demás contenidos de este sitio web pertenecen al titular o se utilizan bajo licencia, y están protegidos por la legislación de propiedad intelectual. [COMPLETAR/VALIDAR: titularidad/registro del nombre comercial y la marca FidePath.] No se permite su reproducción, distribución o modificación sin autorización previa y por escrito, salvo en los casos permitidos por la ley.',
            },
          ],
        },
        {
          id: 'section-6',
          heading: '6. Responsabilidad',
          blocks: [
            {
              type: 'paragraph',
              text: 'Procuramos mantener la información exacta y actualizada, pero no garantizamos que el sitio web esté siempre disponible ni libre de errores. La información es de carácter general y no sustituye un análisis específico de tu proyecto. No nos hacemos responsables del contenido de sitios web de terceros a los que se pueda enlazar desde aquí.',
            },
          ],
        },
        {
          id: 'section-7',
          heading: '7. Enlaces',
          blocks: [
            {
              type: 'paragraph',
              text: 'Este sitio web puede contener enlaces a sitios de terceros (por ejemplo, nuestro perfil de LinkedIn). No los controlamos ni respondemos de su contenido ni de sus prácticas de privacidad.',
            },
          ],
        },
        {
          id: 'section-8',
          heading: '8. Protección de datos y cookies',
          blocks: [
            {
              type: 'paragraph',
              text: 'El tratamiento de datos personales se explica en nuestra [Política de privacidad](/es/politica-de-privacidad). La información sobre cookies está en nuestra [Política de cookies](/es/politica-de-cookies).',
            },
          ],
        },
        {
          id: 'section-9',
          heading: '9. Legislación aplicable y jurisdicción',
          blocks: [
            {
              type: 'paragraph',
              text: 'Este Aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Palma (Illes Balears), sin perjuicio de las normas imperativas de protección de los consumidores [COMPLETAR/VALIDAR: jurisdicción].',
            },
          ],
        },
      ],
    },
    'privacy-policy': {
      key: 'privacy-policy',
      route: '/es/politica-de-privacidad',
      title: 'Política de privacidad',
      lastUpdated: 'Última actualización: [COMPLETAR: fecha de publicación]',
      intro: 'Esta política explica cómo tratamos los datos personales que nos envías a través de este sitio web.',
      tocTitle: 'Contenidos',
      sections: [
        {
          id: 'section-1',
          heading: '1. ¿Quién es el responsable de tus datos?',
          blocks: [
            {
              type: 'list',
              items: [
                'Responsable: [COMPLETAR: titular legal — nombre y apellidos o denominación social], con nombre comercial FidePath Expert Services',
                'NIF/NIE/CIF: [COMPLETAR]',
                'Dirección: Carrer Desbach 3, 1r esquerra, Palma (Balears), España [COMPLETAR/VALIDAR]',
                'Correo electrónico para asuntos de privacidad: joan.perello@fidepath.com [COMPLETAR/VALIDAR: correo específico, si lo hay]',
                'Delegado de protección de datos: no designado [COMPLETAR/VALIDAR]',
              ],
            },
          ],
        },
        {
          id: 'section-2',
          heading: '2. ¿Qué datos recogemos?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando nos contactes por correo electrónico, teléfono o LinkedIn: tu nombre, dirección de correo electrónico y/o teléfono, tu empresa y cargo si los facilitas, y el contenido del mensaje y la información sobre el proyecto que decidas compartir. Nuestro proveedor de alojamiento también puede tratar datos técnicos, como la dirección IP o información del navegador y del dispositivo, en registros del servidor, por motivos de seguridad y funcionamiento [COMPLETAR/VALIDAR: comprobar con la configuración técnica final].',
            },
            {
              type: 'paragraph',
              text: 'Te pedimos que no envíes en el primer mensaje contratos, planos, programaciones u otros documentos del proyecto, ni datos personales de terceros. Si damos curso a tu consulta, te indicaremos cómo enviarnos documentos de forma segura.',
            },
          ],
        },
        {
          id: 'section-3',
          heading: '3. ¿Para qué usamos tus datos y con qué base jurídica?',
          blocks: [
            {
              type: 'table',
              table: {
                headers: ['Finalidad', 'Base jurídica'],
                rows: [
                  [
                    'Responder a tu consulta y contactarte por ese motivo',
                    'Tu consentimiento, otorgado al contactarnos — art. 6.1.a RGPD',
                  ],
                  [
                    'Preparar la propuesta o presupuesto que hayas solicitado',
                    'Aplicación de medidas precontractuales a petición tuya — art. 6.1.b RGPD',
                  ],
                  [
                    'Conservar un registro de consultas para gestionar posibles contactos futuros y defendernos ante reclamaciones',
                    'Nuestro interés legítimo en gestionar y defender nuestra actividad profesional — art. 6.1.f RGPD [COMPLETAR/VALIDAR]',
                  ],
                  [
                    'Cumplir obligaciones fiscales, contables y otras obligaciones legales si llegamos a prestar servicios',
                    'Obligación legal — art. 6.1.c RGPD',
                  ],
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Facilitar los campos obligatorios es necesario para atender tu consulta; sin ellos no podemos responderte. No enviamos boletines ni comunicaciones comerciales, no tomamos decisiones automatizadas sobre ti ni elaboramos perfiles [COMPLETAR/VALIDAR]. Puedes retirar tu consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento realizado antes.',
            },
          ],
        },
        {
          id: 'section-4',
          heading: '4. ¿Cuánto tiempo conservamos tus datos?',
          blocks: [
            {
              type: 'list',
              items: [
                'Consultas que no dan lugar a un encargo: hasta [COMPLETAR/VALIDAR: propuesta de 12] meses desde el último contacto; después se suprimen o anonimizan.',
                'Si prestamos servicios: durante la relación y, después, durante los plazos legales de prescripción aplicables en materia fiscal, contable y de responsabilidad contractual.',
                'Si hay una reclamación pendiente, hasta que se resuelva.',
              ],
            },
          ],
        },
        {
          id: 'section-5',
          heading: '5. ¿Quién recibe tus datos?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Solo proveedores tecnológicos que tratan datos por cuenta nuestra y con un contrato de encargo del tratamiento: [COMPLETAR: proveedor de alojamiento web (p. ej. Vercel — pendiente de confirmar)], [COMPLETAR: proveedor de correo electrónico de joan.perello@fidepath.com]. No cedemos datos a otros terceros, salvo obligación legal (p. ej. administraciones tributarias, juzgados).',
            },
          ],
        },
        {
          id: 'section-6',
          heading: '6. Transferencias internacionales',
          blocks: [
            {
              type: 'paragraph',
              text: '[COMPLETAR/VALIDAR: Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo, por ejemplo en Estados Unidos. En ese caso, las transferencias se basan en [decisión de adecuación / Marco de Privacidad de Datos UE–EE. UU. / Cláusulas contractuales tipo] y puedes solicitarnos una copia de las garantías. Si no hay ninguna transferencia, indicarlo aquí.]',
            },
          ],
        },
        {
          id: 'section-7',
          heading: '7. ¿Qué derechos tienes?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, y retirar tu consentimiento, escribiendo a joan.perello@fidepath.com [COMPLETAR/VALIDAR] e indicando qué derecho quieres ejercer. Podemos pedirte que acredites tu identidad. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) — [www.aepd.es](https://www.aepd.es) — si consideras que se han vulnerado tus derechos.',
            },
          ],
        },
        {
          id: 'section-8',
          heading: '8. Datos de terceros, documentos de proyecto y seguridad',
          blocks: [
            {
              type: 'paragraph',
              text: 'Este sitio web se dirige a profesionales y empresas y no está pensado para menores. Si un encargo implica documentos de proyecto con datos personales de terceros, nuestro papel (responsable independiente o encargado del tratamiento) se determinará caso por caso y se recogerá en el acuerdo de encargo, incluyendo, si procede, un contrato de encargado del tratamiento. Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos [COMPLETAR/VALIDAR: describir las medidas].',
            },
          ],
        },
        {
          id: 'section-9',
          heading: '9. Cambios en esta política',
          blocks: [
            {
              type: 'paragraph',
              text: 'Podemos actualizar esta política para reflejar cambios en nuestra actividad o en la normativa. La fecha de la última versión figura en la parte superior.',
            },
          ],
        },
      ],
    },
    'cookie-policy': {
      key: 'cookie-policy',
      route: '/es/politica-de-cookies',
      title: 'Política de cookies',
      lastUpdated: 'Última actualización: [COMPLETAR: fecha de publicación]',
      sections: [
        {
          id: 'section-1',
          heading: '1. ¿Qué son las cookies?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las cookies y tecnologías similares son pequeños archivos o fragmentos de información que un sitio web guarda en tu dispositivo cuando lo visitas. Pueden ser estrictamente necesarias para que el sitio funcione, o servir para analítica, personalización o publicidad.',
            },
          ],
        },
        {
          id: 'section-2',
          heading: '2. ¿Qué usamos en este sitio web?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Este sitio web está diseñado para funcionar sin cookies no esenciales: no utiliza cookies de analítica, publicidad ni seguimiento, no incrusta contenido de terceros (como mapas o vídeos) y no carga tipografías ni scripts externos. [COMPLETAR/VALIDAR: tras escanear la web publicada en fidepath.com, listar aquí todas las cookies o almacenamientos similares encontrados, con nombre, titular, finalidad y duración — o indicar «A la fecha de esta política no se instala ninguna cookie».]',
            },
            {
              type: 'table',
              table: {
                headers: ['Nombre', 'Titular', 'Finalidad', 'Duración', 'Tipo'],
                rows: [
                  [
                    '[COMPLETAR/VALIDAR]',
                    '[COMPLETAR]',
                    '[COMPLETAR]',
                    '[COMPLETAR]',
                    'Estrictamente necesaria',
                  ],
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Las cookies técnicas estrictamente necesarias no requieren tu consentimiento. Nuestro proveedor de alojamiento puede tratar datos técnicos (como la dirección IP) en registros del servidor por motivos de seguridad y funcionamiento; consulta nuestra [Política de privacidad](/es/politica-de-privacidad).',
            },
          ],
        },
        {
          id: 'section-3',
          heading: '3. Si esto cambia',
          blocks: [
            {
              type: 'paragraph',
              text: 'Si en algún momento añadimos cookies no esenciales (por ejemplo, de analítica), actualizaremos antes esta política y te pediremos el consentimiento mediante un banner que te permita aceptarlas, rechazarlas o configurarlas con la misma facilidad, y no las instalaremos antes de que lo des.',
            },
          ],
        },
        {
          id: 'section-4',
          heading: '4. Cómo gestionar las cookies en tu navegador',
          blocks: [
            {
              type: 'paragraph',
              text: 'Puedes permitir, bloquear o eliminar cookies desde la configuración de tu navegador. Instrucciones: [Chrome](https://support.google.com/chrome/answer/95647?hl=es), [Firefox](https://support.mozilla.org/es/kb/proteccion-mejorada-contra-rastreo-firefox-escritorio), [Safari](https://support.apple.com/es-es/guide/safari/sfri11471/mac), [Edge](https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09).',
            },
          ],
        },
        {
          id: 'section-5',
          heading: '5. Contacto',
          blocks: [
            {
              type: 'paragraph',
              text: 'Para cualquier duda sobre esta política: joan.perello@fidepath.com.',
            },
          ],
        },
      ],
    },
  },
};
