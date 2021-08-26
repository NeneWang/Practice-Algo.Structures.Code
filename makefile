cap:
	git add --all
	git commit -m "${m}"
	git push origin HEAD
	git log -n 2