# GNUmakefile
SHELL := bash
.ONESHELL:
.DELETE_ON_ERROR:
.SHELLFLAGS := -eu -o pipefail -c
MAKEFLAGS += --warn-undefined-variables

.PHONY: help
help: ## Display this help section
	@echo -e "Usage: make <command>\n\nAvailable commands are:"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "  %-38s %s\n", $$1, $$2}' ${MAKEFILE_LIST}
.DEFAULT_GOAL := help

DOCKER_CMD := podman run --rm -it -v .:/opt/app:z -w /opt/app -p 8080:8080 node:latest

.PHONY: shell
shell: ## Start a dev shell in docker/podman container
	$(DOCKER_CMD) bash

.PHONY: run
run: ## Start dev server
	$(DOCKER_CMD) npm run dev

.PHONY: lint
lint: ## Lint project
	$(DOCKER_CMD) npm run lint

.PHONY: test
test: ## Run tests
	$(DOCKER_CMD) npm run test

.PHONY: build
build: ## Build app for production
	$(DOCKER_CMD) npm run build

.PHONY: preview
preview: ## Preview production app locally
	$(DOCKER_CMD) npm run preview
