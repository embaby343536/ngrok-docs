<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2024-12-02T10:08:39Z",
			"hostport": "9e2f4eabacb6.ngrok.paid:443",
			"id": "ep_2pekqWwMfcdD2NjXRNOPZqRQ0zL",
			"name": "command_line",
			"principal": {
				"id": "usr_2peko365oQ16Zi2YJZ5IX2AgyQJ",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://9e2f4eabacb6.ngrok.paid",
			"tunnel": {
				"id": "tn_2pekqWwMfcdD2NjXRNOPZqRQ0zL",
				"uri": "https://api.ngrok.com/tunnels/tn_2pekqWwMfcdD2NjXRNOPZqRQ0zL"
			},
			"tunnel_session": {
				"id": "ts_2pekqYqa6Y5JhS09yDZvPLScXlN",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2pekqYqa6Y5JhS09yDZvPLScXlN"
			},
			"type": "ephemeral",
			"updated_at": "2024-12-02T10:08:39Z",
			"upstream_url": "http://localhost:80",
			"url": "https://9e2f4eabacb6.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2024-12-02T10:08:36Z",
			"domain": {
				"id": "rd_2pekq8b1QLBW0lE3szgPqr012ov",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2pekq8b1QLBW0lE3szgPqr012ov"
			},
			"edge": {
				"id": "edgtls_2pekq98oCMhphjU2GSn2VZl6VNI",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2pekq98oCMhphjU2GSn2VZl6VNI"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2pekqDGqt4gwop3TmLrKkjFf6Up",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2024-12-02T10:08:36Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
