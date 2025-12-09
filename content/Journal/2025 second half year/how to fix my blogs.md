2025-12-06 Copilot gave me this solution to my two-vault blog problem:

## ✅ **Migration Checklist: Blog_Obsidian → Quartz-Enabled Vault**

### **1. Prepare Your Environment**

- Make sure you have:
    - **Node.js** installed (Download here).
    - **Git** installed (Download here).
    - Your Blog_Obsidian vault synced via **Obsidian Sync**.

---

### **2. Rename GitHub Repository**

- Go to **GitHub → Blog_Obsidian repo → Settings → Repository name**.
- Change the name to:
    
    ```
    Kareinas-blog
    ```
    
- Confirm that GitHub Pages is still enabled (Settings → Pages).
- Your blog URL will remain:
    
    ```
    https://riiac.github.io/Kareinas-blog/
    ```
    

---

### **3. Update Local Git Remote**

1. cd path/to/Blog_Obsidian
2. git remote set-url origin https://github.com/riiac/Kareinas-blog.git

verify:

1. git remote -v

---

### **4. Add Quartz Structure to Blog_Obsidian**

- Copy these folders from your Kareinas-blog vault (or from Quartz repo):
    
    ```
    /content
    /assets
    /scripts
    /quartz.config.ts
    /package.json
    ```
    
- Place them inside Blog_Obsidian.
- Move your journal notes into `/content` or adjust Quartz config to point to your existing folder.

---

### **5. Install Quartz Dependencies**

- In Blog_Obsidian folder:

1. npm install

This installs Quartz packages.
   
---

### **6. Test Locally**

- Build the site:
    
    Shell:
    
    npx quartz build  
        
- Preview:
    
    Shell:
    
    npx quartz serve  
    
        
- Open:
    
    ```
    http://localhost:8080
    ```
    
- Check that everything looks correct.

---

### **7. Commit and Push**

- Add all changes:
    
    Shell:
    
    git add .      
    git commit -m "Migrated Blog_Obsidian to Quartz structure"      
    git push origin main  
    
- GitHub Pages will rebuild automatically.

---

### **8. Optional: Obsidian Git Plugin**

- Install **Obsidian Git** plugin for easy commits/pushes inside Obsidian.
- Configure auto-commit intervals if desired.

---

### **9. Optional: Exclude `.git` from Obsidian Sync**

- In Obsidian Sync settings → **Selective Sync**, exclude `.git` folder to reduce sync size.

---

### ✅ **Future Workflow**

- One vault: Blog_Obsidian (Quartz-enabled).
- Obsidian Sync for phone/computer edits.
- GitHub for publishing.
- No more manual folder sync!