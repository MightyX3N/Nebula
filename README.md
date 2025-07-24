
## 🔗 Included Code Snippets

These are code snippets used in the **Nebula** project, designed to enhance and automate parts of WordPress configuration:

---

### 🔐 [OneAll Auto Config Setup](https://github.com/MightyX3N/Nebula/blob/main/OneAll%20Auto%20Config%20Setup/code_snippet.txt) - MultiSite Only

**Description**:  
This snippet automates the initial setup of the **OneAll Social Login** plugin in WordPress by injecting API credentials and default settings directly into the configuration file. The providers (currently set to **Discord**, **GitHub**, and **Steam**) are manually defined in the code snippet like so:

```php
if (!isset($current_settings['providers']) || !is_array($current_settings['providers'])) {
    $current_settings['providers'] = [
        'discord' => 1,
        'github'  => 1,
        'steam'   => 1,
    ];
    $changed = true;
}
```

Currently, these providers can only be set manually in the config file and will only apply when a new subsite is created — they **cannot** be automatically updated once set.  
An ideal improvement would be to make these providers **selectable via a form**, so changes could be automatically applied across old and new subsites. This would make the code more flexible and easier to maintain.

---

### 🔑 [Bricks License Auto Config](https://github.com/MightyX3N/Nebula/blob/main/Bricks%20License%20Auto%20Config/code_snippet.txt) - MultiSite Only

**Description**:  
This snippet automatically sets the **Bricks Builder license key** in a WordPress installation. It's especially useful for theme development environments or staging setups where the license needs to be applied quickly and consistently via a form on the network admin dashboard.  
This removes the need for manual license entry, ensuring that all subsites are correctly licensed and ready for development.


---

### 🌓 [Discord Widget Auto Dark Mode](https://github.com/MightyX3N/Nebula/blob/main/Discord%20Widget%20Dark%20Mode/code_snippet.txt) - Single And MultiSite Compatible

**Description**:  
This snippet automatically enables **dark mode** for the **Discord Widget** on your WordPress site by utilizing the **Dracula Dark Mode** plugin. It leverages the plugin’s functionality to switch the widget's theme to dark mode, ensuring a seamless visual experience for users in low-light conditions.

Please note that there may be a very tiny delay between the light and dark mode switching. This delay is due to the way the theme transition occurs but is generally imperceptible for most users.

The plugin used for this functionality is **[Dracula Dark Mode](https://wordpress.org/plugins/dracula-dark-mode/)**, which enhances your site with a dark theme option.

You can see the feature in action on [**GoPluvia.com**](https://gopluvia.com) when scrolling down the page. (currently removed migh return later)

### 🛡️ [Force Google UDM=14](https://github.com/MightyX3N/Nebula/tree/main/Force%20Google%20UDM%3D14) – Chrome & Firefox Compatible Extension

**Description**:  
This extension automatically appends `udm=14` to Google Search URLs, restoring the **classic search results layout** by skipping AI-generated answers, “Perspectives,” and other clutter. It provides a cleaner, faster search experience — closer to what Google used to be.

🧠 Why `udm=14`?  
Google uses this internal parameter to serve a simpler search UI with fewer experimental elements. This extension forces that layout by modifying search URLs on the fly.

📦 Features:
- Lightweight and runs automatically in the background
- No tracking or analytics
- Compatible with both single-site and multisite setups

🧩 **Installation:**
- **Firefox**: (soon) 
  → Install directly from the Mozilla Add-ons site:  
  [🦊 Force Google UDM=14 – Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/force-google-udm-14/)

- **Chrome**:  
  → Visit the [GitHub source folder](https://github.com/MightyX3N/Nebula/tree/main/Force%20Google%20UDM%3D14)  
  → Download each file manually  
  → Zip them together  
  → Load the ZIP as an unpacked extension via `chrome://extensions` (enable Developer Mode)

⚠️ Notes:
- The Chrome version uses a content script for compatibility with Manifest V3 restrictions.
- Firefox uses a `webRequest` redirect method and requires signing (already handled via AMO).

---

## 📄 License – Nebula Project by MightyX3N

The **Nebula** project is licensed under a **custom non-commercial license** with the following terms:

### ✅ You Are Allowed To
- Use, share, and distribute the code for **non-commercial** and **personal** purposes.
- Submit contributions (e.g., pull requests) to help improve the project.

### ❌ You May Not
- Modify, adapt, or create derivative works without **explicit written permission** from the author.
- Use the code or its contributions for **commercial purposes** without permission.

### 🤝 Contributions Welcome & Protected
- By contributing, you grant **MightyX3N** permission to use and incorporate your work under this license.
- You affirm that your work is original and does not violate third-party rights.
- **This license is not intended to steal, exploit, or profit from your contributions unfairly.**
- If the project is ever monetized, contributors will be **offered good-faith compensation** based on their impact.

---

📬 **For permission requests or contribution discussions**, please contact: MightyX3N
