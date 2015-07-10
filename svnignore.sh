

IGNORE_LIST=$(echo ".git" | cat - .gitignore)
svn propset svn:ignore "${IGNORE_LIST}" . 
