/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Grid Entertainment. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare module soundbyte {

    export namespace authorization { }

    export namespace commands { }

    export namespace client { 
        export const version: string;
    }

    export namespace menu { }

    export namespace navigation { }

    export namespace network { }

    export namespace notification { }

    export namespace playback { 
        /**
         * Pause the current playing track if there are any.
         */
        export function pauseTrack(): void;

         /**
         *  Plays the track (if any tracks are paused)
         */
        export function playTrack(): void;

        /**
         * Play the next track
         */
        export function nextTrack(): void;

        /**
         * Play the previous track
         */
        export function previousTrack(): void;

        /**
         * Get the current playing track
         */
        export function getPlayingTrack(): Track;

        /**
         * This event is fired before the next track starts playing
         */
        export const onBeforeTrackChange: Event<Track>;

        /**
         * This event is fired after the next track starts playing
         */
        export const onAfterTrackChange: Event<Track>;

        /**
         * This event is fired when the playback state changes (e.g. playing to paused).
         */
        export const onPlaybackStateChange: Event<PlaybackState>;
    }
    
    export namespace provider { }
    
    export namespace settings { }

    export namespace storage { 

        /**
         * Store data on the users local machine (plain text)
         */
        export const local: StorageInterface;

        /**
         * Store data with the users SoundByte Account. Will be synced 
         * between machines (plain text).
         */
        export const roaming: StorageInterface;

        /**
         * Used to store access tokens, passwords etc. Encrypted in the 
         * operating systems credential system. Local only.
         */
        export const secret: StorageInterface;

        export interface StorageInterface {
            /**
             * Retrives an item from the specified storage location matching the name.
             * @param name The key to search for
             */
            get(name: string): object;

            /**
             * Stores a value in the specified storage location. Will update if exists
             * and create if it does not exist.
             * @param name The key to store the value under.
             * @param value The value to store.
             */
            set(name: string, value: object): void;

            /**
             * emove an item from the storage location.
             * @param name The kay of the item to remove
             */
            remove(name: string): void;

            /**
             * Clear all items from the storage location.
             */
            clear(): void;
        }
    }

    export namespace system { }
    
    export namespace translate { }
    

    /**
     * A generic user item in SoundByte
     */
    export interface User {
        /**
         * The unique ID of the service that 
         * this user is from.
         */
        serviceType: string;

        /**
         * The Soundbyte ID of this user (only
         * if the user is from SoundByte, e.g likes
         * or history.)
         */
        id: string;

        /**
         * Music service id of user
         */
        userId: string;

        /**
         * The username of this user
         */
        username: string;

        /**
         * Link to the track artwork (full size)
         */
        artworkUrl: string;

        /**
         * Link to the track thumbnail (smaller)
         */
        thumbnailUrl: string;

        /**
         * Link to this users profile
         */
        permalinkUri: string;

        /**
         * The user description, usually a 
         * mixture of HTML and Markdown
         */
        description: string;
    }

    /**
     * A generic track item in SoundByte
     */
    export interface Track {
        
        /**
         * The unique ID of the service that 
         * this track is from.
         */
        serviceType: string;

        /**
         * The Soundbyte ID of this track (only
         * if the track is from SoundByte, e.g likes
         * or history.)
         */
        id: string;

        /**
         * Music service id of track
         */
        trackId: string;

        /**
         * Link to the track
         */
        link: string;

        /**
         * Is the track currently live 
         * (YouTube livestreams for example).
         */
        isLive: string;

        /**
         * Url to the audio stream
         */
        audioStreamUrl: string;

        /**
         * Url to the video stream
         * (if supported)
         */
        videoStreamUrl: string;

        /**
         * Link to the track artwork (full size)
         */
        artworkUrl: string;

        /**
         * Link to the track thumbnail (smaller)
         */
        thumbnailUrl: string;

        /**
         * Title of the track.
         */
        title: string;

        /**
         * The track description, usually a 
         * mixture of HTML and Markdown
         */
        description: string;

        /**
         * The date and time this resource was created.
         */
        created: Date;

         /**
         * The amount of likes on this 
         * track (if supported)
         */
        likeCount: number;

         /**
         * The amount of dislikes on this 
         * track (if supported)
         */
        dislikeCount: number;

         /**
         * The amount of views on this 
         * track (if supported)
         */
        viewCount: number;

        /**
         * The amount of comments on this 
         * track (if supported)
         */
        commentCount: number;

        /**
         * If the user has liked this track
         */
        isLiked: boolean;

        /**
         * Has this track been liked with a users SoundByte
         * account (only supported on SoundByte items).
         */
        isSoundByteLiked: boolean;

        /**
         * The user that uploaded this track
         */
        user: User;
    }

    /**
	 * Represents a typed event.
	 *
	 * A function that represents an event to which you subscribe by calling it with
	 * a listener function as argument.
	 *
	 * @sample `item.onDidChange(function(event) { console.log("Event happened: " + event); });`
	 */
    export interface Event<T> {
        /**
        * A function that represents an event to which you subscribe by calling it with
        * a listener function as argument.
        *
        * @param listener The listener function will be called when the event happens.
        * @param thisArgs The `this`-argument which will be used when calling the event listener.
        * @return A disposable which unsubscribes the event listener.
        */
        (listener: (e: T) => any, thisArgs?: any);
    }

    export enum PlaybackState {
        None,
        Opening,
        Buffering,
        Playing,
        Paused
    }
} 