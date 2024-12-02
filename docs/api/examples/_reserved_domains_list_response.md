<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": null,
			"certificate_management_policy": {
				"authority": "letsencrypt",
				"private_key_type": "ecdsa"
			},
			"certificate_management_status": {
				"provisioning_job": {
					"error_code": null,
					"msg": "Managed certificate provisioning in progress.",
					"retries_at": null,
					"started_at": "2024-12-02T10:08:20Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.2agggdgq9gm65jlma.local-ngrok-cname.com",
			"created_at": "2024-12-02T10:08:20Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2pekoAuoMKBwuFIsch7Vzs5xxiC",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2pekoAuoMKBwuFIsch7Vzs5xxiC"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2pekoDZ60fnsK0BvlVfjwNBkWy4",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2pekoDZ60fnsK0BvlVfjwNBkWy4"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.2agggdgq9gm65jlma.local-ngrok-cname.com",
			"created_at": "2024-12-02T10:08:20Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2pekoA2otZbZvLPoKeo2PUKZGWC",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2pekoA2otZbZvLPoKeo2PUKZGWC"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
