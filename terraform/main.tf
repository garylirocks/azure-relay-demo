locals {
  hyco_name = "relay-hc-demo"
}

resource "azurerm_resource_group" "demo" {
  name     = "rg-relay-demo-001"
  location = "australiaeast"
}

resource "azurerm_relay_namespace" "demo" {
  name                = "relay-demo-001"
  location            = azurerm_resource_group.demo.location
  resource_group_name = azurerm_resource_group.demo.name

  sku_name = "Standard"

  tags = {
    source = "terraform"
  }
}

resource "azurerm_relay_hybrid_connection" "demo" {
  name                          = local.hyco_name
  resource_group_name           = azurerm_resource_group.demo.name
  relay_namespace_name          = azurerm_relay_namespace.demo.name
  requires_client_authorization = false
  user_metadata                 = "testmetadata"
}

output "primary_connection_string" {
  value     = azurerm_relay_namespace.demo.primary_connection_string
  sensitive = true
}

output "hyco_name" {
  value = local.hyco_name
}
