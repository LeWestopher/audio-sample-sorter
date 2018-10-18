// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
export default class AudioSampleSorter {

  private _foundSamples: Array<FoundSample>;

  constructor(
    private _inputFolderePath: string,
    private _outputFolderPath: string
  ) {
    this._foundSamples = []
  }
}

export interface FoundSample {
  fileName: string;
  relativePath?: string;
  absolutePath?: string;
  key?: string;
  bpm?: number;
  oneShot?: boolean;
  lead?: boolean;
  bass?: boolean;
  pluck?: boolean;
  kick?: boolean;
  snare?: boolean;
  cymbal?: boolean;
  brass?: boolean;
}

/**
 * Requirements:
 * 1. Returns a list of all .wav files recursively in a directory by path.
 * 2. Returns an array of strings pointing to the *absolute path* to the sample file.
 * @param dirPath
 */
async function getSampleFilesForDirectory(dirPath: string): Promise<Array<string>> {
  // example
  return [
    '/home/users/file-1.wav',
    '/home/users/file-2.wav'
  ]
}
