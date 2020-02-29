declare namespace coolPlayerTypes {
    interface IPlayerProps {
        autoPlay?: boolean
        playing?: boolean
        onDelete?: (index: number, id: string) => void
        volume?: number
        onVolumeChange?: (volume: number) => void
        data: IAudio[]
        playListPlaceholder?: string
        currentAudio?: IAudio
        zIndex?: number
        onLyricMatched?: (lyric: ILyric[], currentIndex: number) => void
        showLyricNormal?: boolean
        showLyricMini?: boolean
        onMusicChange?: (id: string, currentMusic: IAudio) => void
        onModeChange?: (currentMode: number, prevMode: number) => void
        lyric?: string
        lyricLoading?: boolean
        lyricPlaceholder?: React.ReactNode | string
        avatarPlaceholder?: React.ReactNode
        actions?: Array<(data: IAudio) => React.ReactNode>
        musicActions?: Array<(data: IAudio, active?: boolean) => React.ReactNode>
        playListHeader? : {
            headerLeft?: React.ReactNode | string,
            headerRight?: React.ReactNode | string,
        }
    }
    interface IAudio {
        src: string
        artist: string
        name: string
        img: string
        id: string
        lyric?: string
    }
    interface ILyric {
        time: number | string
        lyric: string
    }
    enum PlayMode {
        Order = 1,
        Random = 2,
        Loop = 3
    }
    namespace lyricDetail {
        interface ILyricDetailProps {
            lyric: ILyric[]
            lyricIndex: number
            info: IAudio
            loading: boolean
            lyricFullScreen: boolean
            lyricPlaceholder: React.ReactElement | React.ReactNode | string
            onSetProgressWithScroll: (time: number) => void
        }
    }
    namespace lyricMini {
        interface ILyricMiniProps {
            lyric: ILyric[]
            lyricIndex: number
        }
    }
    namespace lyricNormal {
        interface ILyricNormalProps {
            lyric: ILyric[]
            lyricIndex: number
            info: IAudio
            loading: boolean
            lyricPlaceholder: React.ReactElement | React.ReactNode | string
        }
    }
}

export { coolPlayerTypes }
