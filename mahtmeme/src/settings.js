var MEME_SETTINGS = {
  creditText: 'Source:', // Default "credits" text.
  creditSize: 12, // Font size for credit text.
  downloadName: 'share', // The name of the downloaded image file (will have a ".png" extension added).
  fontColor: 'white', // Universal font color.

  // Universal font family for texts:
  // Note that you'll need to included quoted font names as you would in CSS, ie: '"Knockout 28 B"'.
  fontFamily: 'Helvetica Neue',
  // Font family options: set to empty array to disable font selector.
  // These options may also be formatted as {text:'Knockout', value:'"Knockout 28 B"'}.
  fontFamilyOpts: ['Arial', 'Helvetica Neue', 'Comic Sans MS'],
  
  // Font size of main headline:
  fontSize: 24,
  // Font size options: set to empty array to disable font-size selector.
  fontSizeOpts: [
    {text: 'Small text', value: 14},
    {text: 'Medium text', value: 24},
    {text: 'Large text', value: 36}
  ],

  headlineText: 'Write your own headline', // Default headline text.
  height: 378, // Canvas rendering height.
  imageScale: 1, // Background image scale.
  imageSrc: '', // Default background image path. MUST reside on host domain, or use base64 data.
  overlayAlpha: 0.5, // Opacity of image overlay.

  // Image overlay color, or blank ('') for no overlay:
  overlayColor: '#000',
  // Overlay color options: set to empty array to disable overlay options selector.
  overlayColorOpts: ['#000', '#777', '#2980b9'],
  paddingRatio: 0.05, // Percentage of canvas width to use as edge padding.
  
  // Text alignment: valid settings are "left", "center", and "right".
  textAlign: 'left',
  // Text alignment options: set to empty array to disable alignment picker.
  textAlignOpts: [
    {text: 'Align left', value: 'left'}, 
    {text: 'Align center', value: 'center'},
    {text: 'Align right', value: 'right'}
  ],

  textShadow: false, // Text shadow toggle.
  textShadowEdit: true, // Toggles text shadow control within the editor.
  watermarkAlpha: 1, // Opacity of watermark image.
  watermarkMaxWidthRatio: 0.25, // Maximum allowed width of watermark (percentage of total canvas width).

  // Path to the watermark image source, or blank for no watermark:
  // Alternatively, use 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA6CAYAAAB79J21AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw%2FeHBhY2tldCBiZWdpbj0i77u%2FIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2BIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkEzNzFGRUYyRDYyMTFFNDkyNjJGQjQ1MDE0MUM4NEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkEzNzFGRjAyRDYyMTFFNDkyNjJGQjQ1MDE0MUM4NEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTM3MUZFRDJENjIxMUU0OTI2MkZCNDUwMTQxQzg0RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QTM3MUZFRTJENjIxMUU0OTI2MkZCNDUwMTQxQzg0RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI%2FPtuFzNgAAAohSURBVHja7Fx5bBZFFJ8WyiUChcoVUloRRKHhiOFoBRRQAQEroCABDIiBIqjc%2F4gE5RIBFWIQi0Ag4ZD7kkNEUEBAOYy00ArlsOUqZwVbjvbzvez7ZLPZ3Tl2erov%2BbXftzvzZnbeNzPvmg0JBAJTGGMvAcoBqgFCWP5QAHATcIe%2BrwFMs5QZAnibPodQf8optncL8DcgE9CZ%2FV8JBGxGA8C%2BgF7KAowE1LS0JYIwQDdAikR7qwDNFNoqkQjBPxaqDjgDqKDpN%2FQ8YLdHHlUA%2BwFPuZS5BxgMWMp8%2Bo9Cba5dAWzTxP%2BwBuEyWtqHudy%2FD%2BjhC1dMwEhHNfE%2FrbGv%2BEM563APhb%2FFF6e4gNM18S%2Bvub9HbK4tAizwRSkn4AxN%2FKtr7u8ty%2FdzgHd9MZYcAVexfE8A3PbFWHgCfkxzf582fd4A2OqL0J3szKQg4cx4REMbaG5la%2BBTA3CRHCAPAI0Aqb4I1WYw0oUitky%2FzB562Rb6wvUu4KK2D%2Fc12bxTfNGVLAFHMcMjhoTOjPO%2B6EqWgBOor3mAT3yxFS0Be9WkUdELRpjW%2BntvyVOyBgHC6fM0X2Qla4kuBXifPu9g9q5Kn1yodBEXMEaIHvdnry1FAPoA2gAiAWHMCPOuB6wA5GIhN0cHVrjLvGd4YGSquWLdg4AWgAOA1pJ1sd%2FoDGnCDA9YTUAlQBlmZJWg0%2BQkYB8gOZ%2BEgM%2F9OiAOUIcZWS2oQ2wCLGYPs1tkCOXyAWAscw7mHAJ0B1zmZQRc0pDRka6YjdDGxKO7YJ1QwIuAJZa%2BnwD0BkQDIgE9AWmm%2B6cBEwBVNWVStBfIjMkAdJTki%2F3bKzjuB3A8eAwPaxDwXcVBWk%2F1jwNCOGXLAkYAztq0nwyobFOnIeCBpewtSi8KVexzTUoZEqX79GMT4V0JcERy7HvzmG7SlJdVWXKgMDcsl%2Br245R9A%2FCXS9utXerud6izExAu2WdcZTIVxiYb0ERgZdqmwHtZKGe9LyxFaxRp%2BGdJYbCjWsyIJi2j%2Fc2Ovgf84tKOU8ZJB8BPpMiIaPozmBHdilAYG8waXcSxaD5kRuarLEUXRQGjY2QAff6UGZEjKz1HylsnDq9Ezv37LvcaAzaSUuZElUhhGutxfJoB%2Bjvca0VKlQrdLYoCfoe0w8vMiBpZqR%2FNzBocPqihbuaU4aUUoebuFNjAVWMv05dzPd7mGv64vmFGfrcKpRQ1AeOAB7MnPwfkWO4PBSzh2O%2FM5BjhxaHDBfiMBMRYrjUi0y2GTElcYuMBLQGTgzaoJGFKcFsboUcS3z8VeH7HUxxiNClZEwQVlSFU%2FiZpjeZ7fQB5Em0OFmjvqCCvdaY6rQDX6fpGMrusfBMUx2meiUc0KWAj6XtbG63fjdA0LCVid%2BmguQKDHWI6wTDVci%2BOzC0ZihRo84ogr9VUHu3W24B7gGEc3js8%2BgzWkZBKm64NFeSTQz9EJjKrsjUIeIVAO6%2BYzIbqpuvVOGaQHZ0SaK%2B8IK%2FNgDLUvxw6itNegH9zxbFC%2B7yDi4OnF%2BCqS%2F3LVJ%2BJCviUBgHvEmjnZyr7peX6KoX2EgXaayzAZyMJty85JXDraCFhG%2B9S6DtuU38AfuQ4PdCxs4VWvTQqPw5QxVxWpJN7NAj4OKeNlibPTpTpehfF9hIEnqunwKoTRgMedLrESzo%2F%2Bij0%2FSK111yH2zRUQBPLKAAtejT9X8EeHk8pRZq07jCoWWt1ornMyAEbA%2FjKxE%2FWXNmgUAeDIvN1hUZFBkJH4L%2BaS1vRFBbESMt003Uc4PqK7VUVKNPY5loumUXvAWYBpto8hwyhmaZyZmpSQQT8dc7gUBc33kiaregRSjJdH%2BehvWiBMk0s368zIzUXZ%2BxyU6KBmVSO1K5XqPNEcROw0zKNjoZBNgH9lg4zTITSAM9wyqCgGpi%2B7wE0BRwD%2FADo7VAvoNCf7QqOj1bFUcB2yXeYLYlJdbvJMxSk%2Fh7aSaQfR12XMk3p2W%2BQaxRTcuvRvhfLcX%2FK0k0KwMtQbEmYwehnHWEze5lH%2F24iKWojXMrUBkwkoWKe9WyaubU5vK8p9mmnZPk4XQIWUbXLaPJmjbDwHUjXD1uuR3loI9Xk8UFvU6zLc1UADJfMWolSNFc6KDzLkwVlJuG7L67mwwwe7TB7m3to41f6%2FzUt%2B9tJWapJihzO0K6Aecw45D5XICoVJDyMp3qiYj8nNGlH7Qtqic4PW7gzRWRSmJHMLmqf8ug3%2Bp9Hphcuu58xI8HuAT3HJopKhUvyPkp8VSibyb8W4wUdAi4tIeAmGgU8hv7PsBm0SA9tHLbMuHiaCfE0e%2B%2BQudZFgfcej8%2BPmSUtJMpjVkmYwswvtBkc1KKb0aCnM%2Fu34lRSVSccZskuZrzmoRfgTVo1VGirBgHLEI5Du%2BK4RAf33lkOv07V93OlCboFn1XgnW4x41TokEKdHgUl4AuaBFyHnAjXmHO%2BVI4i%2F98FylSkFUSWlnrYf4OEpw4yJev0kthGC30GV2aG%2BxE7PMfFaZCpyP%2B4oH0pO2ConM3X8Py4LVVR2Na6FBcBIw0h5WeuS5lTiryTBMqo7GmYlnvO9L0jM6JEaDrmkoa%2BguN9QlNsOZmcsjQsvx0diAiNLyedyWkrVpFvY4HnOCjJEzM46lFdTJ1ZwCn%2FqcMpjHWUHvSq4rPFqDo6ZArnaDrGUlvgDbM3JPligLwch29lyaQ1a27YQsE6Ey3t9qDrr9GzZSmM23qJs1nKAj6jQcCJgm0lSvI9L8AzXpJnEuVtydbFrJT6VK8i5ZOtNfVjreLYdeM8XzU6mBYj66rUtQ%2FnkWNDhOZI8j4rUEZGWUFNvi97mFc9QdJ5NJQ%2Bf0z27HDT%2FdWK47cY0NDhXmty06I8U1X2YMRKj7N3peT%2BsUzmkJVASm6GIK88Wk6DdesqPGsS5Zk9sAmyVFDYgoKEh9sG0HYTTkdll1OfT5KupLxEz%2FYo4KaSAq4lcVrvCw6vOA9Rr04Kz4rL9Dk6vWh3FHVmQC9h5msd1WiSjiUaXzB%2BTLIOmh%2F9mP3hMytlce6LJBCgyfOWjQmn8oaD0mTDDnJwkKAX7x9Npifa%2F22ZwyugZQTsxZul%2Bn6N7TRIvJSXAMen25dTHw%2B64UnFhRrtcnTJnnT58U7VINwd5Hq94NUODp6NUaF9GgLXXTn71jyXuh9x%2BrcGUIPTfnI%2BWAth9JoFFcK9fRKePdJpB9dT7EzXgJ73XtSlYyR2lOKw17VwOdN0SPAICpN0UCwVGXiTnnFacjyPyJyucHvLjpXwJPpeySUkg2KxAaaP2tHyh2ZPKdN1zOKYTMtVBEVippEPPEiYGotnhucpRIfGEz%2BnPRlNKjyoPVuSL76p4FuBKBfutdPJ5Skc%2BJARcFGjYOAeBwazKKNImGXJ351FgYtkGpz9hFwPbWI66yhSaiKojROkRGJ07JKHmABG2QYyI%2BX3UWZkY6bSpFqnGq78V4ABAEV6VJiQtKheAAAAAElFTkSuQmCC' to populate the watermark with base64 data, avoiding Cross-Origin issues.
  watermarkSrc: (localStorage && localStorage.getItem('meme_watermark')) || '/images/vox.png',
  
  // Watermark image options: set to empty array to disable watermark picker.
  // NOTE: only populate the "data" attributes with base64 data when concerned about Cross-Origin requests...
  // Otherwise, just leave "data" attributes blank and allow images to load from your server.
  watermarkOpts: [
    {text: 'Vox', value: '/images/vox.png', data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA6CAYAAAB79J21AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw%2FeHBhY2tldCBiZWdpbj0i77u%2FIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2BIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkEzNzFGRUYyRDYyMTFFNDkyNjJGQjQ1MDE0MUM4NEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkEzNzFGRjAyRDYyMTFFNDkyNjJGQjQ1MDE0MUM4NEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTM3MUZFRDJENjIxMUU0OTI2MkZCNDUwMTQxQzg0RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QTM3MUZFRTJENjIxMUU0OTI2MkZCNDUwMTQxQzg0RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI%2FPtuFzNgAAAohSURBVHja7Fx5bBZFFJ8WyiUChcoVUloRRKHhiOFoBRRQAQEroCABDIiBIqjc%2F4gE5RIBFWIQi0Ag4ZD7kkNEUEBAOYy00ArlsOUqZwVbjvbzvez7ZLPZ3Tl2erov%2BbXftzvzZnbeNzPvmg0JBAJTGGMvAcoBqgFCWP5QAHATcIe%2BrwFMs5QZAnibPodQf8optncL8DcgE9CZ%2FV8JBGxGA8C%2BgF7KAowE1LS0JYIwQDdAikR7qwDNFNoqkQjBPxaqDjgDqKDpN%2FQ8YLdHHlUA%2BwFPuZS5BxgMWMp8%2Bo9Cba5dAWzTxP%2BwBuEyWtqHudy%2FD%2BjhC1dMwEhHNfE%2FrbGv%2BEM563APhb%2FFF6e4gNM18S%2Bvub9HbK4tAizwRSkn4AxN%2FKtr7u8ty%2FdzgHd9MZYcAVexfE8A3PbFWHgCfkxzf582fd4A2OqL0J3szKQg4cx4REMbaG5la%2BBTA3CRHCAPAI0Aqb4I1WYw0oUitky%2FzB562Rb6wvUu4KK2D%2Fc12bxTfNGVLAFHMcMjhoTOjPO%2B6EqWgBOor3mAT3yxFS0Be9WkUdELRpjW%2BntvyVOyBgHC6fM0X2Qla4kuBXifPu9g9q5Kn1yodBEXMEaIHvdnry1FAPoA2gAiAWHMCPOuB6wA5GIhN0cHVrjLvGd4YGSquWLdg4AWgAOA1pJ1sd%2FoDGnCDA9YTUAlQBlmZJWg0%2BQkYB8gOZ%2BEgM%2F9OiAOUIcZWS2oQ2wCLGYPs1tkCOXyAWAscw7mHAJ0B1zmZQRc0pDRka6YjdDGxKO7YJ1QwIuAJZa%2BnwD0BkQDIgE9AWmm%2B6cBEwBVNWVStBfIjMkAdJTki%2F3bKzjuB3A8eAwPaxDwXcVBWk%2F1jwNCOGXLAkYAztq0nwyobFOnIeCBpewtSi8KVexzTUoZEqX79GMT4V0JcERy7HvzmG7SlJdVWXKgMDcsl%2Br245R9A%2FCXS9utXerud6izExAu2WdcZTIVxiYb0ERgZdqmwHtZKGe9LyxFaxRp%2BGdJYbCjWsyIJi2j%2Fc2Ovgf84tKOU8ZJB8BPpMiIaPozmBHdilAYG8waXcSxaD5kRuarLEUXRQGjY2QAff6UGZEjKz1HylsnDq9Ezv37LvcaAzaSUuZElUhhGutxfJoB%2Bjvca0VKlQrdLYoCfoe0w8vMiBpZqR%2FNzBocPqihbuaU4aUUoebuFNjAVWMv05dzPd7mGv64vmFGfrcKpRQ1AeOAB7MnPwfkWO4PBSzh2O%2FM5BjhxaHDBfiMBMRYrjUi0y2GTElcYuMBLQGTgzaoJGFKcFsboUcS3z8VeH7HUxxiNClZEwQVlSFU%2FiZpjeZ7fQB5Em0OFmjvqCCvdaY6rQDX6fpGMrusfBMUx2meiUc0KWAj6XtbG63fjdA0LCVid%2BmguQKDHWI6wTDVci%2BOzC0ZihRo84ogr9VUHu3W24B7gGEc3js8%2BgzWkZBKm64NFeSTQz9EJjKrsjUIeIVAO6%2BYzIbqpuvVOGaQHZ0SaK%2B8IK%2FNgDLUvxw6itNegH9zxbFC%2B7yDi4OnF%2BCqS%2F3LVJ%2BJCviUBgHvEmjnZyr7peX6KoX2EgXaayzAZyMJty85JXDraCFhG%2B9S6DtuU38AfuQ4PdCxs4VWvTQqPw5QxVxWpJN7NAj4OKeNlibPTpTpehfF9hIEnqunwKoTRgMedLrESzo%2F%2Bij0%2FSK111yH2zRUQBPLKAAtejT9X8EeHk8pRZq07jCoWWt1ornMyAEbA%2FjKxE%2FWXNmgUAeDIvN1hUZFBkJH4L%2BaS1vRFBbESMt003Uc4PqK7VUVKNPY5loumUXvAWYBpto8hwyhmaZyZmpSQQT8dc7gUBc33kiaregRSjJdH%2BehvWiBMk0s368zIzUXZ%2BxyU6KBmVSO1K5XqPNEcROw0zKNjoZBNgH9lg4zTITSAM9wyqCgGpi%2B7wE0BRwD%2FADo7VAvoNCf7QqOj1bFUcB2yXeYLYlJdbvJMxSk%2Fh7aSaQfR12XMk3p2W%2BQaxRTcuvRvhfLcX%2FK0k0KwMtQbEmYwehnHWEze5lH%2F24iKWojXMrUBkwkoWKe9WyaubU5vK8p9mmnZPk4XQIWUbXLaPJmjbDwHUjXD1uuR3loI9Xk8UFvU6zLc1UADJfMWolSNFc6KDzLkwVlJuG7L67mwwwe7TB7m3to41f6%2FzUt%2B9tJWapJihzO0K6Aecw45D5XICoVJDyMp3qiYj8nNGlH7Qtqic4PW7gzRWRSmJHMLmqf8ug3%2Bp9Hphcuu58xI8HuAT3HJopKhUvyPkp8VSibyb8W4wUdAi4tIeAmGgU8hv7PsBm0SA9tHLbMuHiaCfE0e%2B%2BQudZFgfcej8%2BPmSUtJMpjVkmYwswvtBkc1KKb0aCnM%2Fu34lRSVSccZskuZrzmoRfgTVo1VGirBgHLEI5Du%2BK4RAf33lkOv07V93OlCboFn1XgnW4x41TokEKdHgUl4AuaBFyHnAjXmHO%2BVI4i%2F98FylSkFUSWlnrYf4OEpw4yJev0kthGC30GV2aG%2BxE7PMfFaZCpyP%2B4oH0pO2ConM3X8Py4LVVR2Na6FBcBIw0h5WeuS5lTiryTBMqo7GmYlnvO9L0jM6JEaDrmkoa%2BguN9QlNsOZmcsjQsvx0diAiNLyedyWkrVpFvY4HnOCjJEzM46lFdTJ1ZwCn%2FqcMpjHWUHvSq4rPFqDo6ZArnaDrGUlvgDbM3JPligLwch29lyaQ1a27YQsE6Ey3t9qDrr9GzZSmM23qJs1nKAj6jQcCJgm0lSvI9L8AzXpJnEuVtydbFrJT6VK8i5ZOtNfVjreLYdeM8XzU6mBYj66rUtQ%2FnkWNDhOZI8j4rUEZGWUFNvi97mFc9QdJ5NJQ%2Bf0z27HDT%2FdWK47cY0NDhXmty06I8U1X2YMRKj7N3peT%2BsUzmkJVASm6GIK88Wk6DdesqPGsS5Zk9sAmyVFDYgoKEh9sG0HYTTkdll1OfT5KupLxEz%2FYo4KaSAq4lcVrvCw6vOA9Rr04Kz4rL9Dk6vWh3FHVmQC9h5msd1WiSjiUaXzB%2BTLIOmh%2F9mP3hMytlce6LJBCgyfOWjQmn8oaD0mTDDnJwkKAX7x9Npifa%2F22ZwyugZQTsxZul%2Bn6N7TRIvJSXAMen25dTHw%2B64UnFhRrtcnTJnnT58U7VINwd5Hq94NUODp6NUaF9GgLXXTn71jyXuh9x%2BrcGUIPTfnI%2BWAth9JoFFcK9fRKePdJpB9dT7EzXgJ73XtSlYyR2lOKw17VwOdN0SPAICpN0UCwVGXiTnnFacjyPyJyucHvLjpXwJPpeySUkg2KxAaaP2tHyh2ZPKdN1zOKYTMtVBEVippEPPEiYGotnhucpRIfGEz%2BnPRlNKjyoPVuSL76p4FuBKBfutdPJ5Skc%2BJARcFGjYOAeBwazKKNImGXJ351FgYtkGpz9hFwPbWI66yhSaiKojROkRGJ07JKHmABG2QYyI%2BX3UWZkY6bSpFqnGq78V4ABAEV6VJiQtKheAAAAAElFTkSuQmCC'},
    {text: 'The Verge', value: '/images/theverge.png', data: ''}
  ],

  width: 755 // Canvas rendering width.
};
