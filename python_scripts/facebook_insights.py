import os
import facebookinsights as fi

# prompt for credentials on the command-line, 
# get access to one or more pages
#pages = fi.authenticate()
# alternatively, pass an existing page token
page = fi.authenticate(token='EAAclJJVmXnABADAOpCBjdx6CMdTFVCzeO5unwhUFV4B4I0WxgKwuE272lTZABnnLnOkXWuUqwYbm3h9ZB9HH5NXG68wadi6WdRFT6nLTeppwVEw10azivEeKXG9zjjdLtrZBlOjYnJsUZCXgI5FWD6iLNqIw5qdYWpEP4meWZCrOvMWOk2lt14RwMYiU3JMs6lvCK04NQEwZDZD')