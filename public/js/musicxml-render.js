// MusicXML Render Hook Script
(function() {
  'use strict';
  
  // Process all musicxml containers on the page
  function initAllOSMD() {
    if (typeof opensheetmusicdisplay === 'undefined' || !opensheetmusicdisplay.OpenSheetMusicDisplay) {
      setTimeout(initAllOSMD, 100);
      return;
    }

    const containers = document.querySelectorAll('.osmd-viewer');
    containers.forEach(function(container) {
      const musicXMLPath = container.getAttribute('data-musicxml-file');
      const musicXMLContent = container.getAttribute('data-musicxml-content');
      
      const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay(container, {
        autoResize: true,
        backend: "svg",
        drawTitle: true,
      });

      if (musicXMLPath) {
        // Load from file
        osmd.load(musicXMLPath).then(function() {
          osmd.render();
        }).catch(function(error) {
          console.error('Error loading MusicXML file:', error);
          container.innerHTML = '<p style="color: red;">Error loading MusicXML file: ' + musicXMLPath + '</p>';
        });
      } else if (musicXMLContent) {
        // Load from inline content
        osmd.load(musicXMLContent).then(function() {
          osmd.render();
        }).catch(function(error) {
          console.error('Error rendering MusicXML:', error);
          container.innerHTML = '<p style="color: red;">Error rendering inline MusicXML content</p>';
        });
      }
    });
  }

  // Start initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllOSMD);
  } else {
    initAllOSMD();
  }
})();
