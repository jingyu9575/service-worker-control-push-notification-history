browser.browserAction.onClicked.addListener(() => {
	browser.runtime.sendMessage("service-worker-control@qw.thucfb.com",
		{ type: 'open-notifications-history' })
})