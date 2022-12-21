# README

Azure Relay tutorial:
https://learn.microsoft.com/en-us/azure/azure-relay/relay-hybrid-connections-node-get-started

The Relay namespace and the hybrid connection is implemented in Terraform.

## Run

1. Install packages

    ```sh
    cd ./sender-listener
    npm install
    ```

2. Create relay instance and hybrid connection

    ```sh
    cd ./terraform
    terraform init

    terraform apply
    ```

3. Start listener and sender

    ```sh
    # in the "terraform"

    ../sender-listener/start.sh listener
    ```

    In another terminal, start sender, and type in something

    ```sh
    ../sender-listener/start.sh sender
    ```