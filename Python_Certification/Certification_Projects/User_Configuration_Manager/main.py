def add_setting(settings, addSetting):
    
    key = addSetting[0].lower()
    value = addSetting[1].lower()
    
    if key in settings:
        return(f"Setting '{key}' already exists! Cannot add a new setting with this name.")
    settings[key] = value
    return(f"Setting '{key}' added with value '{value}' successfully!")

def update_setting(settings, updateSetting):
    key = updateSetting[0].lower()
    value = updateSetting[1].lower()
    
    if key in settings:
        settings[key] = value
        return(f"Setting '{key}' updated to '{value}' successfully!")
    return(f"Setting '{key}' does not exist! Cannot update a non-existing setting.")

def delete_setting(settings, key):
    key_lower = key.lower()
    
    if key_lower in settings:
        settings.pop(key_lower)
        return(f"Setting '{key_lower}' deleted successfully!")
    return "Setting not found!"

def view_settings(settings):
    if (len(settings) <= 0):
        return("No settings available.")
    
    res = "Current User Settings:\n"
    for key, value in settings.items():
        res += f"{key.capitalize()}: {value}\n"

    return res

test_settings = {'theme': 'dark'}