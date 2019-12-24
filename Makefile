clean:
	-rm -rf build

build-qa: clean
	npm run build -qa

deploy-qa: build-qa
	aws s3 sync build/ s3://inventoryflo-qa --acl public-read
	