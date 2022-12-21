#!/bin/env bash

export RELAY_CONNECRTION_STRING=$(terraform output -raw primary_connection_string)
export RELAY_CONNECRTION_STRING=$(terraform output -raw primary_connection_string)
export HYCO_NAME=$(terraform output -raw hyco_name)

if [[ $1 == "listener" ]]; then
  node ../sender-listener/listener.js
else
  node ../sender-listener/sender.js
fi

