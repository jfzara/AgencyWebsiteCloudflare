class VideoPlayer {
    private video: HTMLVideoElement | null;

    constructor() {
        this.video = document.querySelector('.phone-video');
        this.init();
    }

    private init(): void {
        if (!this.video) return;

        // Configuration optimisée pour iOS
        this.setupVideo();
        void this.playVideo();
    }

    private setupVideo(): void {
        if (!this.video) return;

        // Paramètres essentiels pour iOS
        this.video.playsInline = true;
        this.video.muted = true;
        this.video.loop = true; // Activer la lecture en boucle
        this.video.preload = 'auto';
        this.video.setAttribute('playsinline', ''); // Double assurance pour iOS
        this.video.setAttribute('webkit-playsinline', ''); // Support Safari
        
        // Style initial
        this.video.style.opacity = '1';
        this.video.style.transform = 'translateY(0)';
    }

    private async playVideo(): Promise<void> {
        if (!this.video) return;

        try {
            // Tentative de lecture initiale
            await this.video.play();
        } catch (error) {
            console.log('Playback nécessite une interaction utilisateur:', error);
            
            // Gestionnaire pour le démarrage après interaction utilisateur
            const playOnInteraction = async (): Promise<void> => {
                if (!this.video) return;
                
                try {
                    await this.video.play();
                    // Nettoyage des écouteurs après succès
                    document.removeEventListener('touchstart', playOnInteraction);
                    document.removeEventListener('click', playOnInteraction);
                } catch (e) {
                    console.log('Échec de lecture après interaction:', e);
                }
            };

            // Ajout des écouteurs pour l'interaction utilisateur
            document.addEventListener('touchstart', playOnInteraction, { once: true });
            document.addEventListener('click', playOnInteraction, { once: true });
        }
    }
}

// Initialisation sécurisée
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new VideoPlayer());
} else {
    new VideoPlayer();
}