
import { $t } from './services/i18n.js';

export const AppMenus = {
    
	navbarTopRightItems: [],
	navbarTopLeftItems: [],
	navbarSideLeftItems: [
  {
    "to": "/home",
    "label": $t('home'),
    "icon": "pi pi-th-large text-primary",
    "iconcolor": "",
    "target": "",
    
  },
  {
    "to": "/about",
    "label": $t('about'),
    "icon": "pi pi-th-large text-primary",
    "iconcolor": "",
    "target": "",
    
  },
  {
    "to": "/blog",
    "label": $t('blog'),
    "icon": "pi pi-th-large text-primary",
    "iconcolor": "",
    "target": "",
    
  },
  {
    "to": "/cliente",
    "label": $t('cliente'),
    "icon": "pi pi-th-large text-primary",
    "iconcolor": "",
    "target": "",
    
  },
  {
    "to": "/contacto",
    "label": $t('contacto'),
    "icon": "pi pi-th-large text-primary",
    "iconcolor": "",
    "target": "",
    
  },
  {
    "to": "/reclutamiento",
    "label": $t('reclutamiento'),
    "icon": "pi pi-th-large text-primary",
    "iconcolor": "",
    "target": "",
    
  },
  {
    "to": "/servicios",
    "label": $t('servicios'),
    "icon": "pi pi-th-large text-primary",
    "iconcolor": "",
    "target": "",
    
  },
  {
    "to": "/soporte",
    "label": $t('soporte'),
    "icon": "pi pi-th-large text-primary",
    "iconcolor": "",
    "target": "",
    
  },
  {
    "to": "/usuario",
    "label": $t('usuario'),
    "icon": "pi pi-th-large text-primary",
    "iconcolor": "",
    "target": "",
    
  }
],
	posicionesItems: [    
{value: "Ingenieria", label: $t('ingenieria')},
	{value: "Administracion", label: $t('administracion')},
	{value: "Pasante", label: $t('pasante')}
    ],
	statusItems: [    
{value: "Abierto", label: $t('abierto')},
	{value: "Cerrado", label: $t('cerrado')}
    ],
	tipoItems: [    
{value: "Ingenieria", label: $t('ingenieria')},
	{value: "Administracion", label: $t('administracion')},
	{value: "Licenciatura", label: $t('licenciatura')},
	{value: "Pasante", label: $t('pasante')}
    ],

    exportFormats: {
        print: {
			label: 'Print',
            icon: 'pi pi-print',
            type: 'print',
            ext: '',
        },
        pdf: {
			label: 'Pdf',
			
            icon: 'pi pi-file-pdf',
            type: 'pdf',
            ext: 'pdf',
        },
        excel: {
			label: 'Excel',
            icon: 'pi pi-file-excel',
            type: 'excel',
            ext: 'xlsx',
        },
        csv: {
			label: 'Csv',
            icon: 'pi pi-table',
            type: 'csv',
            ext: 'csv',
        },
    },
    locales: {
  "fr": "French",
  "ru": "Russian",
  "zh-CN": "Chinese",
  "en-US": "English",
  "it": "Italian",
  "hi": "Hindi",
  "pt": "Portuguese",
  "de": "German",
  "es": "Spanish",
  "ar": "Arabic"
}
}