# Guide: Pushing to New Repository with City Doctor Account

## For Repository: citydoctordev/citydoc_landing.git

### Step-by-Step Instructions

1. **Navigate to your project directory**
   ```bash
   cd "/path/to/your/project"
   ```

2. **Initialize Git (if not already initialized)**
   ```bash
   git init
   ```

3. **Set Git Config for City Doctor Account**
   ```bash
   git config user.name "developercitydoctor"
   git config user.email "developer.citydoctor@gmail.com"
   ```

4. **Add all files**
   ```bash
   git add .
   ```

5. **Make your first commit**
   ```bash
   git commit -m "first commit"
   ```

6. **Rename branch to main (if needed)**
   ```bash
   git branch -M main
   ```

7. **Add remote using SSH with City Doctor account**
   ```bash
   git remote add origin git@github.com-citydoctor:citydoctordev/citydoc_landing.git
   ```

8. **Push to the repository**
   ```bash
   git push -u origin main
   ```

---

## If Repository Already Has Git Initialized

If the repository already has commits or a remote, use these commands instead:

```bash
# Remove existing remote (if any)
git remote remove origin

# Add new remote
git remote add origin git@github.com-citydoctor:citydoctordev/citydoc_landing.git

# Push to new repository
git push -u origin main
```

---

## For Multiple Projects

Repeat the same process for each of your 3 other projects:

### Project 2, 3, 4 Template:
```bash
cd "/path/to/project-2"
git init
git config user.name "developercitydoctor"
git config user.email "developer.citydoctor@gmail.com"
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com-citydoctor:citydoctordev/REPO_NAME.git
git push -u origin main
```

**Just replace `REPO_NAME` with the actual repository name for each project.**

---

## Important Notes

1. **SSH Host Alias**: Always use `git@github.com-citydoctor:` (not `git@github.com:`) to use your City Doctor account
2. **Repository Format**: `git@github.com-citydoctor:OWNER/REPO.git`
   - `OWNER` = `citydoctordev` (the organization/user who created the repo)
   - `REPO` = `citydoc_landing` (the repository name)
3. **HTTPS vs SSH**: The invitation link uses HTTPS, but we convert it to SSH format for your SSH key setup

---

## Converting HTTPS URL to SSH Format

**HTTPS Format:**
```
https://github.com/citydoctordev/citydoc_landing.git
```

**SSH Format (for City Doctor account):**
```
git@github.com-citydoctor:citydoctordev/citydoc_landing.git
```

**Pattern:**
- `https://github.com/OWNER/REPO.git` 
- → `git@github.com-citydoctor:OWNER/REPO.git`

---

## Troubleshooting

### If push fails with permission error:
1. Make sure you accepted the invitation to the repository
2. Verify your SSH key is added to your City Doctor GitHub account
3. Test SSH connection: `ssh -T git@github.com-citydoctor`

### If you need to check current remote:
```bash
git remote -v
```

### If you need to update remote URL:
```bash
git remote set-url origin git@github.com-citydoctor:citydoctordev/citydoc_landing.git
```

