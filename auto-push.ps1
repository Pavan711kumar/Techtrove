cd "C:\Users\kovva\OneDrive\Attachments\Desktop\Tech-world\tech-trove"
git add .
if (git diff --cached --quiet) {
    Write-Host "No changes to commit"
} else {
    git commit -m "Auto-commit: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git push origin main
    Write-Host "Pushed to GitHub at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
}
