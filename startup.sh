#!/bin/bash
npx json-server data/api.json --port 8000 &
npm run build && serve -s build