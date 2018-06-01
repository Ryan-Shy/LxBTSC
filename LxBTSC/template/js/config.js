var Config = {};

function loadConfig() {
    return new Promise((resolve, reject) => {
        $.getJSON("config.json", function(data) {
            Config = data;
            resolve();
        })
        .fail(function() {
            Config.MAX_LINES = 500;
            Config.EMBED_ENABLED = true;
            Config.GENERICS_DISABLED = false;
            Config.FAVICONS_ENABLED = false;
            Config.EMOTICONS_ENABLED = true;
            Config.AVATARS_ENABLED = false;
            Config.HOVER_ANIMATES_GIFS = false;
            Config.DOWNLOAD_DIR = "";
            Config.REMOTE_EMOTES = [];
            resolve();
        });
    });
}