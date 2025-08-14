{
    "name": "Multi Company Selection Confirm",
    "version": "17.1",
    "description": """
    """,
    "summary": "Multi Company Selection || Multi select company edits || confirm, cancel multi company||multi company multi company. ",
    "author": "OMAR-NABIL",
    "license": "OPL-1",
    "category": "Tools",
    "depends": [
        'base_setup',
        "base",
        "web",
    ],
    "data": [
    ],
     'assets': {
         'web.assets_backend': [
            'multicompanies_multi_select_edit/static/src/js/*.js',
            'multicompanies_multi_select_edit/static/src/xml/*.xml',
        ],
    },
    "images": ["static/description/banner.png"],
    "auto_install": False,
    "application": False,
}
