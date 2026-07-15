async function lastUpdated(){
    try{
        const response = await fetch('https://api.github.com/repos/arvee4n/ArvenOnline');
        const data = await response.json();
        const date = new Date(data.pushed_at);

        const formatted = date.toLocaleString('en-US',{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        document.getElementById('last-updated').textContent = formatted;
    }   catch (error) {
        document.getElementById('last-updated').textContent = 'unavailable';
        console.error('Failed to fetch update time:', error);
    }
}

lastUpdated();