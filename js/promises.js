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-github api acces token

function getLastCommitDate(username) {
    return fetch(`https://api.github.com/users/${username}/events`{headers: {'Authorization':'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-github api acces token'}})
        .then(response => response.json())
        .then(events => events.filter(event => event.type === "PushEvent"))
        .then(pushEvents => pushEvents[0].created_at)
}
