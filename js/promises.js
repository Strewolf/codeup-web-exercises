

function getLastCommitDate(username) {
    return fetch(`https://api.github.com/users/${username}/events`{headers: {}})
        .then(response => response.json())
        .then(events => events.filter(event => event.type === "PushEvent"))
        .then(pushEvents => pushEvents[0].created_at)
}
