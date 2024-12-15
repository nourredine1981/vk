if (!(Get-Service -Name ssh-agent).Status -eq 'Running') {
    Start-Service ssh-agent
}
