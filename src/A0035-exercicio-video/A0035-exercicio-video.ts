
// A0035-exercicio-video.ts

interface VideoPlayerElements {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
    playToggle(): void;
    stop(): void;
    iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
    private videoPlayer: HTMLVideoElement;
    private playButton: HTMLButtonElement;
    private stopButton: HTMLButtonElement;

    constructor(videoPlayerElements: VideoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }

    iniciarEventos(): void { }

    playToggle(): void { }

    stop(): void { }
}

const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video') as HTML,
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
});
