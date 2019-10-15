
import os
from newsroom.default_settings import CLIENT_CONFIG

env = os.environ.get

DEBUG=False

MAIL_SERVER = env('MAIL_SERVER', 'localhost')
MAIL_PORT = int(env('MAIL_PORT', 25))
MAIL_USE_TLS = env('MAIL_USE_TLS', False)
MAIL_USE_SSL = env('MAIL_USE_SSL', False)
MAIL_USERNAME = env('MAIL_USERNAME', '')
MAIL_PASSWORD = env('MAIL_PASSWORD', '')

CLIENT_TIME_FORMAT = 'HH:mm'
CLIENT_DATE_FORMAT = 'MMM DD, YYYY'
SITE_NAME = 'CP Newsroom LJI'
SHOW_USER_REGISTER = True
COPYRIGHT_HOLDER = 'CP'
COPYRIGHT_NOTICE = ''
USAGE_TERMS = ''
LANGUAGES = ['en']
DEFAULT_LANGUAGE = 'en'
CLIENT_CONFIG['list_animations'] = False
