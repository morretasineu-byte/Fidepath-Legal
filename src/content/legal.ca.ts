import { LegalLanguageBundle } from '../types/i18n';

export const legalCa: LegalLanguageBundle = {
  lang: 'ca',
  firstLayer: {
    title: 'Informació bàsica sobre protecció de dades',
    rows: [
      {
        label: 'Responsable',
        value:
          '[COMPLETAR: nom del titular legal / denominació social], amb nom comercial FidePath Expert Services',
      },
      {
        label: 'Finalitat',
        value:
          'Atendre la consulta que ens enviïs per correu electrònic, telèfon o LinkedIn i, si escau, preparar una proposta dels nostres serveis',
      },
      {
        label: 'Legitimació',
        value:
          "El teu consentiment, atorgat en contactar-nos, i, si escau, l'aplicació de mesures precontractuals a petició teva",
      },
      {
        label: 'Destinataris',
        value:
          "Proveïdors tecnològics que actuen per compte nostre (allotjament web i correu electrònic) [COMPLETAR/VALIDAR: noms dels proveïdors]. Cap altra cessió, tret d'obligació legal. [COMPLETAR/VALIDAR: transferències internacionals]",
      },
      {
        label: 'Drets',
        value:
          "Pots accedir, rectificar i suprimir les teves dades, així com exercir altres drets, tal com s'explica a la informació addicional",
      },
      {
        label: 'Informació addicional',
        value: 'Consulta la nostra [Política de privadesa](/ca/politica-de-privadesa)',
      },
    ],
  },
  pages: {
    'legal-notice': {
      key: 'legal-notice',
      route: '/ca/avis-legal',
      title: 'Avís legal',
      lastUpdated: 'Darrera actualització: [COMPLETAR: data de publicació]',
      sections: [
        {
          id: 'section-1',
          heading: '1. Titular del lloc web',
          blocks: [
            {
              type: 'paragraph',
              text: "En compliment de l'article 10 de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI), el titular d'aquest lloc web és:",
            },
            {
              type: 'list',
              items: [
                'Nom / denominació social: [COMPLETAR: titular legal — nom i cognoms o denominació social]',
                'Nom comercial: FidePath Expert Services',
                "NIF/NIE/CIF: [COMPLETAR: número d'identificació fiscal]",
                'Adreça: Carrer Desbach 3, 1r esquerra, Palma (Balears), Espanya [COMPLETAR/VALIDAR: confirmar que és el domicili professional publicable; afegir codi postal]',
                'Correu electrònic: joan.perello@fidepath.com',
                'Telèfon: +34 615 847 893 [COMPLETAR/VALIDAR: confirmar el número]',
                'Registre Mercantil (només societats): [COMPLETAR: registre, tom, foli, full — o eliminar si no aplica]',
                'Domini: fidepath.com [COMPLETAR/VALIDAR: confirmar registre i titularitat]',
                "Dades professionals (només si s'exerceix una professió regulada): títol oficial espanyol d'«Ingeniero de Caminos, Canales y Puertos» (Universitat Politècnica de Catalunya, Espanya); col·legi o institució professional i número [COMPLETAR/VALIDAR: p. ex. CICCP, número — el CV indica 31985; confirmar a què correspon]; normes professionals aplicables [COMPLETAR/VALIDAR]. Eliminar aquesta línia si es confirma que no aplica.",
              ],
            },
          ],
        },
        {
          id: 'section-2',
          heading: '2. Objecte del lloc web',
          blocks: [
            {
              type: 'paragraph',
              text: "Aquest lloc web presenta els serveis de consultoria tècnica independent de FidePath Expert Services: planificació forense, anàlisi de retards en obres de construcció, avaluació d'ampliacions de termini, anàlisi de disrupcions, informes pericials independents i suport tècnic en reclamacions i controvèrsies de construcció, per a clients del Regne Unit, Europa i l'Orient Mitjà [COMPLETAR/VALIDAR: abast dels serveis i territoris], i permet als visitants enviar una consulta.",
            },
          ],
        },
        {
          id: 'section-3',
          heading: '3. Naturalesa de la informació',
          blocks: [
            {
              type: 'paragraph',
              text: "El contingut d'aquest lloc web és informatiu i tècnic. No constitueix assessorament jurídic ni crea cap relació professional. Qualsevol encàrrec es formalitza per separat en un acord escrit que en recull l'abast, els lliurables, els honoraris i les condicions.",
            },
          ],
        },
        {
          id: 'section-4',
          heading: "4. Condicions d'ús",
          blocks: [
            {
              type: 'paragraph',
              text: "L'accés a aquest lloc web és gratuït. Els usuaris es comprometen a fer-ne un ús lícit i de bona fe, i a no utilitzar-lo de manera il·lícita, perjudicial per a tercers o que pugui danyar, sobrecarregar o deteriorar el lloc web o la seva disponibilitat.",
            },
          ],
        },
        {
          id: 'section-5',
          heading: '5. Propietat intel·lectual i industrial',
          blocks: [
            {
              type: 'paragraph',
              text: "Els textos, imatges, disseny, estructura i altres continguts d'aquest lloc web pertanyen al titular o s'utilitzen amb llicència, i estan protegits per la legislació de propietat intel·lectual. [COMPLETAR/VALIDAR: titularitat/registre del nom comercial i la marca FidePath.] No es permet la reproducció, distribució o modificació sense autorització prèvia i per escrit, excepte en els casos permesos per la llei.",
            },
          ],
        },
        {
          id: 'section-6',
          heading: '6. Responsabilitat',
          blocks: [
            {
              type: 'paragraph',
              text: "Procurem mantenir la informació exacta i actualitzada, però no garantim que el lloc web estigui sempre disponible ni lliure d'errors. La informació és de caràcter general i no substitueix una anàlisi específica del teu projecte. No ens fem responsables del contingut de llocs web de tercers als quals es pugui enllaçar des d'aquí.",
            },
          ],
        },
        {
          id: 'section-7',
          heading: '7. Enllaços',
          blocks: [
            {
              type: 'paragraph',
              text: 'Aquest lloc web pot contenir enllaços a llocs de tercers (per exemple, el nostre perfil de LinkedIn). No els controlem ni responem del seu contingut ni de les seves pràctiques de privadesa.',
            },
          ],
        },
        {
          id: 'section-8',
          heading: '8. Protecció de dades i cookies',
          blocks: [
            {
              type: 'paragraph',
              text: 'El tractament de dades personals s\'explica a la nostra [Política de privadesa](/ca/politica-de-privadesa). La informació sobre cookies és a la nostra [Política de cookies](/ca/politica-de-cookies).',
            },
          ],
        },
        {
          id: 'section-9',
          heading: '9. Legislació aplicable i jurisdicció',
          blocks: [
            {
              type: 'paragraph',
              text: 'Aquest Avís legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals de Palma (Illes Balears), sense perjudici de les normes imperatives de protecció dels consumidors [COMPLETAR/VALIDAR: jurisdicció].',
            },
          ],
        },
      ],
    },
    'privacy-policy': {
      key: 'privacy-policy',
      route: '/ca/politica-de-privadesa',
      title: 'Política de privadesa',
      lastUpdated: 'Darrera actualització: [COMPLETAR: data de publicació]',
      intro: "Aquesta política explica com tractem les dades personals que ens envies a través d'aquest lloc web.",
      tocTitle: 'Continguts',
      sections: [
        {
          id: 'section-1',
          heading: '1. Qui és el responsable de les teves dades?',
          blocks: [
            {
              type: 'list',
              items: [
                'Responsable: [COMPLETAR: titular legal — nom i cognoms o denominació social], amb nom comercial FidePath Expert Services',
                'NIF/NIE/CIF: [COMPLETAR]',
                'Adreça: Carrer Desbach 3, 1r esquerra, Palma (Balears), Espanya [COMPLETAR/VALIDAR]',
                "Correu electrònic per a qüestions de privadesa: joan.perello@fidepath.com [COMPLETAR/VALIDAR: correu específic, si n'hi ha]",
                'Delegat de protecció de dades: no designat [COMPLETAR/VALIDAR]',
              ],
            },
          ],
        },
        {
          id: 'section-2',
          heading: '2. Quines dades recollim?',
          blocks: [
            {
              type: 'paragraph',
              text: "Quan ens contactes per correu electrònic, telèfon o LinkedIn: el teu nom, adreça electrònica i/o telèfon, l'empresa i el càrrec si els facilites, i el contingut del missatge i la informació sobre el projecte que decideixis compartir. El nostre proveïdor d'allotjament també pot tractar dades tècniques, com l'adreça IP o informació del navegador i del dispositiu, en registres del servidor, per motius de seguretat i funcionament [COMPLETAR/VALIDAR: comprovar amb la configuració tècnica final].",
            },
            {
              type: 'paragraph',
              text: 'Et demanem que no enviïs al primer missatge contractes, plànols, programacions ni altres documents del projecte, ni dades personals de tercers. Si donem curs a la teva consulta, t\'indicarem com enviar-nos documents de manera segura.',
            },
          ],
        },
        {
          id: 'section-3',
          heading: '3. Per a què fem servir les teves dades i amb quina base jurídica?',
          blocks: [
            {
              type: 'table',
              table: {
                headers: ['Finalitat', 'Base jurídica'],
                rows: [
                  [
                    'Respondre la teva consulta i contactar-te per aquest motiu',
                    'El teu consentiment, atorgat en contactar-nos — art. 6.1.a RGPD',
                  ],
                  [
                    'Preparar la proposta o pressupost que hagis sol·licitat',
                    'Aplicació de mesures precontractuals a petició teva — art. 6.1.b RGPD',
                  ],
                  [
                    'Conservar un registre de consultes per gestionar possibles contactes futurs i defensar-nos davant de reclamacions',
                    'El nostre interès legítim a gestionar i defensar la nostra activitat professional — art. 6.1.f RGPD [COMPLETAR/VALIDAR]',
                  ],
                  [
                    'Complir obligacions fiscals, comptables i altres obligacions legals si arribem a prestar serveis',
                    'Obligació legal — art. 6.1.c RGPD',
                  ],
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Facilitar els camps obligatoris és necessari per atendre la teva consulta; sense ells no et podem respondre. No enviem butlletins ni comunicacions comercials, no prenem decisions automatitzades sobre tu ni elaborem perfils [COMPLETAR/VALIDAR]. Pots retirar el consentiment en qualsevol moment, sense que afecti la licitud del tractament fet abans.',
            },
          ],
        },
        {
          id: 'section-4',
          heading: '4. Quant de temps conservem les teves dades?',
          blocks: [
            {
              type: 'list',
              items: [
                "Consultes que no donen lloc a un encàrrec: fins a [COMPLETAR/VALIDAR: proposta de 12] mesos des de l'últim contacte; després se suprimeixen o s'anonimitzen.",
                'Si prestem serveis: durant la relació i, després, durant els terminis legals de prescripció aplicables en matèria fiscal, comptable i de responsabilitat contractual.',
                'Si hi ha una reclamació pendent, fins que es resolgui.',
              ],
            },
          ],
        },
        {
          id: 'section-5',
          heading: '5. Qui rep les teves dades?',
          blocks: [
            {
              type: 'paragraph',
              text: "Només proveïdors tecnològics que tracten dades per compte nostre i amb un contracte d'encàrrec del tractament: [COMPLETAR: proveïdor d'allotjament web (p. ex. Vercel — pendent de confirmar)], [COMPLETAR: proveïdor de correu electrònic de joan.perello@fidepath.com]. No cedim dades a altres tercers, tret d'obligació legal (p. ex. administracions tributàries, jutjats).",
            },
          ],
        },
        {
          id: 'section-6',
          heading: '6. Transferències internacionals',
          blocks: [
            {
              type: 'paragraph',
              text: "[COMPLETAR/VALIDAR: Alguns proveïdors poden tractar dades fora de l'Espai Econòmic Europeu, per exemple als Estats Units. En aquest cas, les transferències es basen en [decisió d'adequació / Marc de Privadesa de Dades UE–EUA / Clàusules contractuals tipus] i pots sol·licitar-nos una còpia de les garanties. Si no hi ha cap transferència, indicar-ho aquí.]",
            },
          ],
        },
        {
          id: 'section-7',
          heading: '7. Quins drets tens?',
          blocks: [
            {
              type: 'paragraph',
              text: "Pots exercir els drets d'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat, i retirar el consentiment, escrivint a joan.perello@fidepath.com [COMPLETAR/VALIDAR] i indicant quin dret vols exercir. Et podem demanar que acreditis la teva identitat. També tens dret a presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (AEPD) — [www.aepd.es](https://www.aepd.es) — si consideres que s'han vulnerat els teus drets.",
            },
          ],
        },
        {
          id: 'section-8',
          heading: '8. Dades de tercers, documents de projecte i seguretat',
          blocks: [
            {
              type: 'paragraph',
              text: "Aquest lloc web s'adreça a professionals i empreses i no està pensat per a menors. Si un encàrrec implica documents de projecte amb dades personals de tercers, el nostre paper (responsable independent o encarregat del tractament) es determinarà cas per cas i es recollirà en l'acord d'encàrrec, incloent-hi, si escau, un contracte d'encàrrec del tractament. Apliquem mesures tècniques i organitzatives adequades per protegir les teves dades [COMPLETAR/VALIDAR: descriure les mesures].",
            },
          ],
        },
        {
          id: 'section-9',
          heading: '9. Canvis en aquesta política',
          blocks: [
            {
              type: 'paragraph',
              text: "Podem actualitzar aquesta política per reflectir canvis en la nostra activitat o en la normativa. La data de l'última versió consta a la part superior.",
            },
          ],
        },
      ],
    },
    'cookie-policy': {
      key: 'cookie-policy',
      route: '/ca/politica-de-cookies',
      title: 'Política de cookies',
      lastUpdated: 'Darrera actualització: [COMPLETAR: data de publicació]',
      sections: [
        {
          id: 'section-1',
          heading: '1. Què són les cookies?',
          blocks: [
            {
              type: 'paragraph',
              text: "Les cookies i tecnologies similars són petits fitxers o fragments d'informació que un lloc web desa al teu dispositiu quan el visites. Poden ser estrictament necessàries perquè el lloc funcioni, o servir per a analítica, personalització o publicitat.",
            },
          ],
        },
        {
          id: 'section-2',
          heading: '2. Què fem servir en aquest lloc web?',
          blocks: [
            {
              type: 'paragraph',
              text: "Aquest lloc web està dissenyat per funcionar sense cookies no essencials: no utilitza cookies d'analítica, publicitat ni seguiment, no incrusta contingut de tercers (com mapes o vídeos) i no carrega tipografies ni scripts externs. [COMPLETAR/VALIDAR: després d'escanejar el web publicat a fidepath.com, llistar aquí totes les cookies o emmagatzematges similars trobats, amb nom, titular, finalitat i durada — o indicar «A la data d'aquesta política no s'instal·la cap cookie».]",
            },
            {
              type: 'table',
              table: {
                headers: ['Nom', 'Titular', 'Finalitat', 'Durada', 'Tipus'],
                rows: [
                  [
                    '[COMPLETAR/VALIDAR]',
                    '[COMPLETAR]',
                    '[COMPLETAR]',
                    '[COMPLETAR]',
                    'Estrictament necessària',
                  ],
                ],
              },
            },
            {
              type: 'paragraph',
              text: "Les cookies tècniques estrictament necessàries no requereixen el teu consentiment. El nostre proveïdor d'allotjament pot tractar dades tècniques (com l'adreça IP) en registres del servidor per motius de seguretat i funcionament; consulta la nostra [Política de privadesa](/ca/politica-de-privadesa).",
            },
          ],
        },
        {
          id: 'section-3',
          heading: '3. Si això canvia',
          blocks: [
            {
              type: 'paragraph',
              text: "Si en algun moment afegim cookies no essencials (per exemple, d'analítica), actualitzarem abans aquesta política i et demanarem el consentiment mitjançant un bàner que et permeti acceptar, rebutjar o configurar-les amb la mateixa facilitat, i no les instal·larem abans que el donis.",
            },
          ],
        },
        {
          id: 'section-4',
          heading: '4. Com gestionar les cookies al navegador',
          blocks: [
            {
              type: 'paragraph',
              text: 'Pots permetre, bloquejar o eliminar cookies des de la configuració del navegador. Instruccions: [Chrome](https://support.google.com/chrome/answer/95647?hl=ca), [Firefox](https://support.mozilla.org/ca/kb/proteccio-de-seguiment-millorada-firefox-escriptori), [Safari](https://support.apple.com/ca-es/guide/safari/sfri11471/mac), [Edge](https://support.microsoft.com/ca-es/microsoft-edge/suprimir-les-cookies-al-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09).',
            },
          ],
        },
        {
          id: 'section-5',
          heading: '5. Contacte',
          blocks: [
            {
              type: 'paragraph',
              text: 'Per a qualsevol dubte sobre aquesta política: joan.perello@fidepath.com.',
            },
          ],
        },
      ],
    },
  },
};
