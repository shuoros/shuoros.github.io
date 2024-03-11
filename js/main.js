function downloadCV() {
    const a = document.createElement('a')
    a.href = "files/Soroush Shemshadi CV.pdf";
    a.setAttribute('target', '_blank');
    a.setAttribute('download', 'Soroush Shemshadi CV.pdf');
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}