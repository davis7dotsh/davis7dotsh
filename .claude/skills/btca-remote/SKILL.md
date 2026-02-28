---
name: btca-remote
description: Query cloud-hosted btca resources via MCP for source-first answers
---

## What I do

- Query btca's cloud-hosted resources through MCP
- Provide source-first answers about technologies
- Access resources provisioned in the btca dashboard

## When to use me

Use this skill when you need up-to-date information about technologies configured in the project's btca cloud instance.

## Getting resources

Check `btca.remote.config.jsonc` for the list of available resources in this project.

## Workflow

1. Call `listResources` to see available resources
2. Call `ask` with your question and exact resource names from step 1

## Rules

- Always call `listResources` before `ask`
- `ask` requires at least one resource in the `resources` array
- Use only resource names returned by `listResources`
- Include only resources relevant to the question

## Common errors

- "Invalid resources" -> re-run `listResources` and use exact names
- "Instance is provisioning / error state" -> wait or retry after a minute
- "Missing or invalid Authorization header" -> MCP auth is invalid; fix it in https://btca.dev/app/settings/
- MCP server doesn't exist -> Prompt the user to set it up at https://btca.dev/app/settings/
