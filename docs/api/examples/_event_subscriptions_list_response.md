<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2024-12-02T10:08:43Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2pekr10DAHdrR6tJGVmRcgO6viF",
					"uri": "https://api.ngrok.com/event_destinations/ed_2pekr10DAHdrR6tJGVmRcgO6viF"
				}
			],
			"id": "esb_2pekr07IC0kElYGrkCAl9ctOaKh",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2pekr07IC0kElYGrkCAl9ctOaKh/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2pekr07IC0kElYGrkCAl9ctOaKh"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
