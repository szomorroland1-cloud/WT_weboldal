function switchTab(pageId) {
    document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');

    if (pageId === 'home-page') {
        document.getElementById('btn-tab-home').classList.add('active');
    } else if (pageId === 'playground-page') {
        document.getElementById('btn-tab-play').classList.add('active');
        runCode();
    }
}

function directToPlayground() {
    switchTab('playground-page');
}

function runCode() {
    const code = document.getElementById('code-editor').value;
    const previewFrame = document.getElementById('live-preview');
    const iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    
    iframeDoc.open();
    iframeDoc.write(code);
    iframeDoc.close();
}
