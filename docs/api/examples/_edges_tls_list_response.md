<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-12-02T10:08:47Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2pekrYcya2hpqd7M7j61F7Wkkun",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2pekrYcya2hpqd7M7j61F7Wkkun"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2pekqACUxIY7GYHBvP9zxxKtDyz",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2pekqACUxIY7GYHBvP9zxxKtDyz"
				},
				"enabled": true
			},
			"created_at": "2024-12-02T10:08:36Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2pekq98oCMhphjU2GSn2VZl6VNI",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2pekq98oCMhphjU2GSn2VZl6VNI"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
