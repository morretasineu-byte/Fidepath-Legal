import { LegalLanguageBundle } from '../types/i18n';

export const legalEn: LegalLanguageBundle = {
  lang: 'en',
  firstLayer: {
    title: 'Basic data protection information',
    rows: [
      {
        label: 'Controller',
        value: "[COMPLETAR: legal owner's name / company name], trading as FidePath Expert Services",
      },
      {
        label: 'Purpose',
        value:
          'Handling the enquiry you send us by e-mail, telephone or LinkedIn and, where relevant, preparing a proposal for our services',
      },
      {
        label: 'Legal basis',
        value:
          'Your consent, given by contacting us, and, where applicable, steps taken at your request before entering into a contract',
      },
      {
        label: 'Recipients',
        value:
          'Technology providers acting on our behalf (website hosting and e-mail) [COMPLETAR/VALIDAR: provider names]. No other disclosures, except where required by law. [COMPLETAR/VALIDAR: international transfers]',
      },
      {
        label: 'Rights',
        value:
          'You may access, rectify and erase your data, and exercise other rights, as explained in the additional information',
      },
      {
        label: 'Additional information',
        value: 'See our [Privacy Policy](/en/privacy-policy)',
      },
    ],
  },
  pages: {
    'legal-notice': {
      key: 'legal-notice',
      route: '/en/legal-notice',
      title: 'Legal Notice',
      lastUpdated: 'Last updated: [COMPLETAR: publication date]',
      sections: [
        {
          id: 'section-1',
          heading: '1. Website owner',
          blocks: [
            {
              type: 'paragraph',
              text: 'In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI), the owner of this website is:',
            },
            {
              type: 'list',
              items: [
                'Name / corporate name: [COMPLETAR: legal owner — full name or company name]',
                'Trading name: FidePath Expert Services',
                'Tax ID (NIF/NIE/CIF): [COMPLETAR: tax identification number]',
                'Address: Carrer Desbach 3, 1r esquerra, Palma (Balears), Spain [COMPLETAR/VALIDAR: confirm this is the professional address that may be published; add postal code]',
                'E-mail: joan.perello@fidepath.com',
                'Telephone: +34 615 847 893 [COMPLETAR/VALIDAR: confirm number]',
                'Commercial Registry (companies only): [COMPLETAR: registry, volume, folio, sheet — or delete if not applicable]',
                'Domain: fidepath.com [COMPLETAR/VALIDAR: confirm registration and ownership]',
                'Professional data (only if a regulated profession is practised): official Spanish degree "Ingeniero de Caminos, Canales y Puertos" (Universitat Politècnica de Catalunya, Spain); professional body and membership number [COMPLETAR/VALIDAR: e.g. CICCP, number — the CV shows 31985; confirm what it refers to]; applicable professional rules [COMPLETAR/VALIDAR]. Delete this line if the owner confirms it does not apply.',
              ],
            },
          ],
        },
        {
          id: 'section-2',
          heading: '2. Purpose of the website',
          blocks: [
            {
              type: 'paragraph',
              text: 'This website presents the independent technical consultancy services offered by FidePath Expert Services: forensic planning, construction delay analysis, extension of time assessment, disruption analysis, independent expert reports, and technical support in construction claims and disputes, for clients in the United Kingdom, Europe and the Middle East [COMPLETAR/VALIDAR: scope of services and territories], and allows visitors to send an enquiry.',
            },
          ],
        },
        {
          id: 'section-3',
          heading: '3. Nature of the information',
          blocks: [
            {
              type: 'paragraph',
              text: 'The content of this website is informational and technical. It is not legal advice and does not create a professional engagement. Any engagement is formalised separately in a written agreement that sets out its scope, deliverables, fees and conditions.',
            },
          ],
        },
        {
          id: 'section-4',
          heading: '4. Terms of use',
          blocks: [
            {
              type: 'paragraph',
              text: 'Access to this website is free. Users undertake to use it lawfully and in good faith, and not to use it in ways that are unlawful, harmful to third parties, or that may damage, overload or impair the website or its availability.',
            },
          ],
        },
        {
          id: 'section-5',
          heading: '5. Intellectual and industrial property',
          blocks: [
            {
              type: 'paragraph',
              text: 'Texts, images, design, structure and other content of this website belong to the owner or are used under licence, and are protected by intellectual property law. [COMPLETAR/VALIDAR: ownership/registration of the FidePath trade name and mark.] Reproduction, distribution or modification without prior written permission is not allowed, except as permitted by law.',
            },
          ],
        },
        {
          id: 'section-6',
          heading: '6. Liability',
          blocks: [
            {
              type: 'paragraph',
              text: 'We make reasonable efforts to keep the information accurate and up to date, but we do not guarantee that the website will always be available or free of errors. The information is general and should not be relied on as a substitute for a specific analysis of your project. We are not responsible for the content of third-party websites that may be linked from this site.',
            },
          ],
        },
        {
          id: 'section-7',
          heading: '7. Links',
          blocks: [
            {
              type: 'paragraph',
              text: 'This website may contain links to third-party websites (for example, our LinkedIn profile). We do not control them and are not responsible for their content or privacy practices.',
            },
          ],
        },
        {
          id: 'section-8',
          heading: '8. Data protection and cookies',
          blocks: [
            {
              type: 'paragraph',
              text: 'Personal data processing is explained in our [Privacy Policy](/en/privacy-policy). Information about cookies is available in our [Cookie Policy](/en/cookie-policy).',
            },
          ],
        },
        {
          id: 'section-9',
          heading: '9. Governing law and jurisdiction',
          blocks: [
            {
              type: 'paragraph',
              text: 'This Legal Notice is governed by Spanish law. For any dispute, the parties submit to the courts of Palma (Balearic Islands), without prejudice to any mandatory rules protecting consumers [COMPLETAR/VALIDAR: jurisdiction].',
            },
          ],
        },
      ],
    },
    'privacy-policy': {
      key: 'privacy-policy',
      route: '/en/privacy-policy',
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: [COMPLETAR: publication date]',
      intro: 'This policy explains how we handle the personal data you send us through this website.',
      tocTitle: 'Contents',
      sections: [
        {
          id: 'section-1',
          heading: '1. Who is responsible for your data?',
          blocks: [
            {
              type: 'list',
              items: [
                'Controller: [COMPLETAR: legal owner — full name or company name], trading as FidePath Expert Services',
                'Tax ID: [COMPLETAR: NIF/NIE/CIF]',
                'Address: Carrer Desbach 3, 1r esquerra, Palma (Balears), Spain [COMPLETAR/VALIDAR]',
                'E-mail for privacy matters: joan.perello@fidepath.com [COMPLETAR/VALIDAR: dedicated e-mail, if any]',
                'Data Protection Officer: not appointed [COMPLETAR/VALIDAR]',
              ],
            },
          ],
        },
        {
          id: 'section-2',
          heading: '2. What data do we collect?',
          blocks: [
            {
              type: 'paragraph',
              text: 'When you contact us by e-mail, telephone or LinkedIn: your name, e-mail address and/or telephone number, your company and position if you provide them, and the content of your message and any information about your project that you choose to share. Our hosting provider may also process technical data such as IP address, browser and device information in server logs, for security and operation [COMPLETAR/VALIDAR: check against the final technical set-up].',
            },
            {
              type: 'paragraph',
              text: 'Please do not send contracts, drawings, programmes or other project documents, or personal data of third parties, in your first message. If we proceed with your enquiry, we will tell you how to send documents securely.',
            },
          ],
        },
        {
          id: 'section-3',
          heading: '3. What do we use your data for, and on what legal basis?',
          blocks: [
            {
              type: 'table',
              table: {
                headers: ['Purpose', 'Legal basis'],
                rows: [
                  [
                    'Answering your enquiry and contacting you about it',
                    'Your consent, given by contacting us — Art. 6.1.a GDPR',
                  ],
                  [
                    'Preparing a proposal or quotation you have asked for',
                    'Steps taken at your request before entering into a contract — Art. 6.1.b GDPR',
                  ],
                  [
                    'Keeping a record of enquiries to manage possible future contact and to defend ourselves in claims',
                    'Our legitimate interest in managing and defending our professional activity — Art. 6.1.f GDPR [COMPLETAR/VALIDAR]',
                  ],
                  [
                    'Complying with tax, accounting and other legal obligations if we end up providing services',
                    'Legal obligation — Art. 6.1.c GDPR',
                  ],
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Providing the required fields is necessary to handle your enquiry; without them we cannot reply. We do not send newsletters or commercial mailings, we do not take automated decisions about you and we do not create profiles [COMPLETAR/VALIDAR]. You can withdraw your consent at any time, without affecting the lawfulness of the processing carried out before.',
            },
          ],
        },
        {
          id: 'section-4',
          heading: '4. How long do we keep your data?',
          blocks: [
            {
              type: 'list',
              items: [
                'Enquiries that do not lead to an engagement: up to [COMPLETAR/VALIDAR: proposed 12] months from our last contact, then deleted or anonymised.',
                'If we provide services: for the duration of the relationship and afterwards for the legal limitation periods applicable to tax, accounting and contractual liability.',
                'Where a claim is pending, until it is resolved.',
              ],
            },
          ],
        },
        {
          id: 'section-5',
          heading: '5. Who receives your data?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Only technology providers that process data on our behalf and under a data processing agreement: [COMPLETAR: website hosting provider (e.g. Vercel — to be confirmed)], [COMPLETAR: e-mail provider hosting joan.perello@fidepath.com]. We do not disclose data to other third parties except where required by law (e.g. tax authorities, courts).',
            },
          ],
        },
        {
          id: 'section-6',
          heading: '6. International transfers',
          blocks: [
            {
              type: 'paragraph',
              text: '[COMPLETAR/VALIDAR: Some providers may process data outside the European Economic Area, for example in the United States. In that case, transfers rely on [adequacy decision / EU–US Data Privacy Framework / Standard Contractual Clauses] and you may request a copy of the safeguards by writing to us. If no transfer takes place, say so here.]',
            },
          ],
        },
        {
          id: 'section-7',
          heading: '7. What are your rights?',
          blocks: [
            {
              type: 'paragraph',
              text: 'You may exercise your rights of access, rectification, erasure, objection, restriction of processing and portability, and withdraw your consent, by writing to joan.perello@fidepath.com [COMPLETAR/VALIDAR] and stating which right you wish to exercise. We may ask you to verify your identity. You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) — [www.aepd.es](https://www.aepd.es) — if you consider that your data protection rights have been infringed.',
            },
          ],
        },
        {
          id: 'section-8',
          heading: '8. Third-party data, project documents and security',
          blocks: [
            {
              type: 'paragraph',
              text: 'This website is aimed at professionals and companies and is not intended for minors. If an engagement involves project documents containing personal data of third parties, our role (independent controller or processor) will be determined case by case and set out in the engagement agreement, including, where required, a data processing agreement. We apply appropriate technical and organisational measures to protect your data [COMPLETAR/VALIDAR: describe measures].',
            },
          ],
        },
        {
          id: 'section-9',
          heading: '9. Changes to this policy',
          blocks: [
            {
              type: 'paragraph',
              text: 'We may update this policy to reflect changes in our activity or in the law. The date of the latest version appears at the top.',
            },
          ],
        },
      ],
    },
    'cookie-policy': {
      key: 'cookie-policy',
      route: '/en/cookie-policy',
      title: 'Cookie Policy',
      lastUpdated: 'Last updated: [COMPLETAR: publication date]',
      sections: [
        {
          id: 'section-1',
          heading: '1. What are cookies?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cookies and similar technologies are small files or pieces of information that a website stores on your device when you visit it. They can be strictly necessary for the site to work, or used for analytics, personalisation or advertising.',
            },
          ],
        },
        {
          id: 'section-2',
          heading: '2. What do we use on this website?',
          blocks: [
            {
              type: 'paragraph',
              text: 'This website is designed to work without non-essential cookies: it does not use analytics, advertising or tracking cookies, does not embed third-party content (such as maps or videos) and does not load external fonts or scripts. [COMPLETAR/VALIDAR: after scanning the published website at fidepath.com, list here every cookie or similar storage found, with name, owner, purpose and duration — or state "At the date of this policy, no cookies are set".]',
            },
            {
              type: 'table',
              table: {
                headers: ['Name', 'Owner', 'Purpose', 'Duration', 'Type'],
                rows: [
                  [
                    '[COMPLETAR/VALIDAR]',
                    '[COMPLETAR]',
                    '[COMPLETAR]',
                    '[COMPLETAR]',
                    'Strictly necessary',
                  ],
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Strictly necessary technical cookies do not require your consent. Our hosting provider may process technical data (such as IP address) in server logs for security and operation; see our [Privacy Policy](/en/privacy-policy).',
            },
          ],
        },
        {
          id: 'section-3',
          heading: '3. If this changes',
          blocks: [
            {
              type: 'paragraph',
              text: 'If we ever add non-essential cookies (for example, analytics), we will first update this policy and ask for your consent through a banner that lets you accept, reject or configure them with equal ease, and we will not set them before you consent.',
            },
          ],
        },
        {
          id: 'section-4',
          heading: '4. How to manage cookies in your browser',
          blocks: [
            {
              type: 'paragraph',
              text: 'You can allow, block or delete cookies in your browser settings. Instructions: [Chrome](https://support.google.com/chrome/answer/95647), [Firefox](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop), [Safari](https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac), [Edge](https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09).',
            },
          ],
        },
        {
          id: 'section-5',
          heading: '5. Contact',
          blocks: [
            {
              type: 'paragraph',
              text: 'For questions about this policy: joan.perello@fidepath.com.',
            },
          ],
        },
      ],
    },
  },
};
