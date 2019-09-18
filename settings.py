
import os
from newsroom.default_settings import BLUEPRINTS as blueprints, CORE_APPS, CLIENT_CONFIG

if os.environ.get('PUSH'):
    BLUEPRINTS = blueprints
else:
    BLUEPRINTS = [blueprint for blueprint in blueprints if 'push' not in blueprint]

INSTALLED_APPS = [

]

CLIENT_TIME_FORMAT = 'HH:mm'
CLIENT_DATE_FORMAT = 'MMM DD, YYYY'
SITE_NAME = 'CP Newsroom LJI'
COPYRIGHT_HOLDER = 'CP'
COPYRIGHT_NOTICE = ''
USAGE_TERMS = ''
LANGUAGES = ['en']
DEFAULT_LANGUAGE = 'en'
CLIENT_CONFIG['list_animations'] = False
