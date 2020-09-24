@echo off
start bundle exec jekyll serve
sleep 5
start "" http://localhost:4000/
