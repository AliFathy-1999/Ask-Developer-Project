import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor() { }
  public GETHUB_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
  `;
  public HOME_ICON=`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg>
  `;
  public TAGS_ICON =`
  <?xml version="1.0" encoding="utf-8"?>
  <!-- Uploaded to SVGRepo https://www.svgrepo.com -->
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="92px" height="92px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
  <path id="XMLID_1184_" d="M75.2,51.6c0-1.1-0.4-2.1-1.2-2.8L36.7,12c-0.7-0.7-1.6-1.1-2.6-1.1L4.3,9C3.1,8.9,2,9.4,1.2,10.2
    C0.4,11-0.1,12.1,0,13.3l1.9,29.3c0.1,1,0.5,1.9,1.2,2.6l37.4,36.7c0.8,0.8,1.8,1.2,2.8,1.2c1,0,2-0.4,2.8-1.2L74,54.4
    C74.8,53.7,75.2,52.7,75.2,51.6z M43.3,73.4L9.9,40.5L8.3,17.3l23.8,1.5l33.4,32.8L43.3,73.4z M26,26.2c1.1,1.1,1.8,2.7,1.8,4.2
    c0,1.6-0.6,3.1-1.8,4.2c-1.1,1.1-2.7,1.8-4.3,1.8c-1.6,0-3.1-0.6-4.3-1.8c-1.1-1.1-1.8-2.7-1.8-4.2c0-1.6,0.6-3.1,1.8-4.2
    c1.1-1.1,2.7-1.8,4.3-1.8C23.3,24.4,24.9,25.1,26,26.2z M92,51.6c0,0.9-0.4,1.8-1,2.5L63.1,81.5c-0.7,0.7-1.6,1-2.5,1
    c-0.9,0-1.8-0.3-2.5-1c-1.4-1.4-1.4-3.6,0-4.9l25.4-24.9L48.6,17.4c-1.4-1.4-1.4-3.6,0-4.9c1.4-1.4,3.6-1.4,5,0L91,49.1
    C91.6,49.8,92,50.7,92,51.6z"/>
  </svg>
  `;
  public USER_ICON =`
  <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 459.864 459.864" style="enable-background:new 0 0 459.864 459.864;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M395.988,193.978c-6.215,8.338-13.329,15.721-21.13,21.941c33.044,21.079,55.005,58.06,55.005,100.077
				c0,13.638-20.011,23.042-31.938,27.434c-9.301,3.425-20.237,6.229-32.19,8.347c0.387,5.05,0.586,10.153,0.586,15.3
				c0,4.455-0.389,9.647-1.518,15.299c16.064-2.497,30.815-6.128,43.488-10.794c42.626-15.694,51.573-38.891,51.573-55.586
				C459.863,265.52,434.565,220.85,395.988,193.978z"/>
			<path d="M311.244,15.147c-18.734,0-36.411,7.436-50.724,21.145c5.632,7.212,10.553,15.004,14.733,23.246
				c9.592-10.94,22.195-17.602,35.991-17.602c29.955,0,54.325,31.352,54.325,69.888s-24.37,69.888-54.325,69.888
				c-9.01,0-17.507-2.853-24.995-7.868c-2.432,8.863-5.627,17.42-9.53,25.565c10.642,5.952,22.36,9.093,34.525,9.093
				c45.83,0,81.115-44.3,81.115-96.678C392.359,59.441,357.069,15.147,311.244,15.147z"/>
			<path d="M259.999,226.28c-6.487,8.205-13.385,15.089-20.57,20.892c40.84,24.367,68.257,68.991,68.257,119.904
				c0,17.196-24.104,28.639-38.472,33.929c-26.025,9.583-62.857,15.078-101.053,15.078c-38.196,0-75.029-5.495-101.054-15.078
				c-14.368-5.29-38.472-16.732-38.472-33.929c0-50.914,27.417-95.538,68.257-119.904c-7.184-5.802-14.083-12.687-20.57-20.892
				C30.403,256.335,0,308.218,0,367.077c0,18.127,9.926,43.389,57.213,60.8c29.496,10.861,68.898,16.841,110.947,16.841
				c42.049,0,81.451-5.98,110.947-16.841c47.287-17.411,57.213-42.673,57.213-60.8C336.32,308.218,305.918,256.335,259.999,226.28z"
				/>
			<path d="M168.16,242.764c53.003,0,93.806-51.234,93.806-111.804c0-60.571-40.808-111.804-93.806-111.804
				c-52.995,0-93.806,51.223-93.806,111.804C74.354,191.542,115.169,242.764,168.16,242.764z M168.16,47.79
				c35.936,0,65.171,37.31,65.171,83.169s-29.236,83.169-65.171,83.169s-65.171-37.31-65.171-83.169S132.225,47.79,168.16,47.79z"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

  `;
  public MYQUESTIONS_ICON=`
  <?xml version="1.0" ?><svg width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc/><g><circle cx="16" cy="16" fill="none" r="15" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="16" x2="16" y1="24" y2="26"/><path d="M16,22v-2.615   c0-1.441,0.877-2.736,2.215-3.271l0,0C19.897,15.441,21,13.812,21,12v0c0-2.761-2.239-5-5-5h0c-2.761,0-5,2.239-5,5v0" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g></svg>
  `
  public PROFILE_ICON=`
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  `;
  public LOGOUT_ICON=`
  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <g>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M5 11h8v2H5v3l-5-4 5-4v3zm-1 7h2.708a8 8 0 1 0 0-12H4A9.985 9.985 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4z"/>
  </g>
</svg>

  `;
  public LOGIN_ICON=`
  <?xml version="1.0" standalone="no"?>
<svg width="1024px" height="1024px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon">
  <defs>
    <style/>
  </defs>
  <path d="M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 0 1 520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 0 1 270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 0 1 0 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"/>
</svg>
  `;
  public REGISTRATION_ICON=`<?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 478.945 478.945" style="enable-background:new 0 0 478.945 478.945;" xml:space="preserve">
  <g>
    <path d="M278.461,151.423c32.608,0,59.138-26.529,59.138-59.138s-26.529-59.138-59.138-59.138s-59.138,26.529-59.138,59.138
      S245.853,151.423,278.461,151.423z M278.461,63.147c16.066,0,29.138,13.071,29.138,29.138c0,16.067-13.071,29.138-29.138,29.138
      s-29.138-13.071-29.138-29.138C249.323,76.218,262.395,63.147,278.461,63.147z"/>
    <path d="M123.75,150.41c41.355,0,75-33.645,75-75s-33.645-75-75-75s-75,33.645-75,75S82.395,150.41,123.75,150.41z M123.75,30.41
      c24.813,0,45,20.187,45,45s-20.187,45-45,45s-45-20.187-45-45S98.937,30.41,123.75,30.41z"/>
    <path d="M358.31,219.981c-17.411-27.072-47.244-43.558-79.849-43.558c-28.833,0-55.501,12.89-73.327,34.594
      c-21.772-19.047-50.252-30.607-81.384-30.607C55.514,180.41,0,235.924,0,304.16v15h223.59c-2.286,9.616-3.504,19.641-3.504,29.946
      c0,71.368,58.062,129.43,129.43,129.43s129.43-58.062,129.43-129.43C478.945,280.694,425.591,224.518,358.31,219.981z
       M31.199,289.16c7.201-44.588,45.962-78.75,92.551-78.75s85.35,34.162,92.551,78.75H31.199z M225.478,233.78
      c12.099-17.068,31.681-27.357,52.983-27.357c16.198,0,31.397,5.954,43.073,16.309c-31.87,7.052-59.365,25.879-77.658,51.674
      C240.219,259.647,233.907,245.927,225.478,233.78z M349.516,448.536c-54.826,0-99.43-44.604-99.43-99.43s44.604-99.43,99.43-99.43
      s99.43,44.604,99.43,99.43S404.342,448.536,349.516,448.536z"/>
    <polygon points="364.516,287.49 334.516,287.49 334.516,334.106 287.899,334.106 287.899,364.106 334.516,364.106 334.516,410.722
      364.516,410.722 364.516,364.106 411.131,364.106 411.131,334.106 364.516,334.106 	"/>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>
  `
  public ARROW_UP_ICON = `
  <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
<g>
	<path d="M437.2,178.7c12.8,12.8,12.8,33.4,0,46.2c-6.4,6.4-14.7,9.6-23.1,9.6s-16.7-3.2-23.1-9.6L277.7,111.5v345.8
		c0,18-14.6,32.7-32.7,32.7s-32.7-14.6-32.7-32.7V111.5L99,224.9c-12.8,12.8-33.4,12.8-46.2,0s-12.8-33.4,0-46.2L221.9,9.6
		C228,3.4,236.3,0,245,0c8.7,0,17,3.4,23.1,9.6L437.2,178.7z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
  `;
  public SUBMIT_ICON = `
  <?xml version="1.0" ?><svg width="512px" height="512px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M460.54,169.58A222.6,222.6,0,1,0,478,256,221.16,221.16,0,0,0,460.54,169.58ZM256,448C150,448,64,362,64,256S150,64,256,64s192,86,192,192S362,448,256,448Zm28.06-307.33L399.39,256,284.06,371.33l-21.21-21.21L342,271H133.82V241H342l-79.12-79.12Z"/></svg>
  `;
  public RESET_ICON = `
  <svg width="21px" height="21px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><path d="m12.5 1.5c2.4138473 1.37729434 4 4.02194088 4 7 0 4.418278-3.581722 8-8 8s-8-3.581722-8-8 3.581722-8 8-8"/><path d="m12.5 5.5v-4h4"/></g></svg>
  `
  public ERROR_ICON = `
  <?xml version="1.0" ?><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.95206 16.048L16.0769 7.92297" stroke="white" stroke-width="2"/><path d="M16.0914 16.0336L7.90884 7.85101" stroke="white" stroke-width="2"/><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" stroke-width="2"/></svg>

  `
  public ERROR_ICON2 = `
  <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<circle style="fill:#D75A4A;" cx="25" cy="25" r="25"/>
<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16
	"/>
<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34
	"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

  `
  public EDIT_ICON = `
  <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
<g id="XMLID_23_">
	<path id="XMLID_24_" d="M75,180v60c0,8.284,6.716,15,15,15h60c3.978,0,7.793-1.581,10.606-4.394l164.999-165
		c5.858-5.858,5.858-15.355,0-21.213l-60-60C262.794,1.581,258.978,0,255,0s-7.794,1.581-10.606,4.394l-165,165
		C76.58,172.206,75,176.022,75,180z M105,186.213L255,36.213L293.787,75l-150,150H105V186.213z"/>
	<path id="XMLID_27_" d="M315,150.001c-8.284,0-15,6.716-15,15V300H30V30H165c8.284,0,15-6.716,15-15s-6.716-15-15-15H15
		C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V165.001C330,156.716,323.284,150.001,315,150.001z"
		/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

  `
  public SUCCESS_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>
  `
  public UPLOAD_IMAGE_ICON = `<?xml version="1.0" encoding="iso-8859-1"?>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 95.52"><title>upload-image</title><path d="M5.68,12.23H61.14a36.79,36.79,0,0,0-2.3,6.7H6.74V88.78h98.72V63.65a37.49,37.49,0,0,0,6.7-2.64V89.88a5.58,5.58,0,0,1-1.65,4,1.6,1.6,0,0,1-.3.26,5.48,5.48,0,0,1-3.73,1.4H5.64a5.61,5.61,0,0,1-4-1.66,5.68,5.68,0,0,1-1.65-4v-72a5.63,5.63,0,0,1,5.64-5.63ZM95.19,0A27.69,27.69,0,1,1,67.51,27.68,27.68,27.68,0,0,1,95.19,0Zm-4,41h8.07a2.91,2.91,0,0,0,2.91-2.9V28.91h5.12a2.4,2.4,0,0,0,2.06-1c1.07-1.61-.39-3.2-1.42-4.33C105,20.44,98.47,14.69,97,13a2.35,2.35,0,0,0-3.7,0C91.86,14.73,85,20.83,82.2,23.92c-1,1.07-2.14,2.54-1.14,4a2.41,2.41,0,0,0,2,1h5.15v9.23A2.91,2.91,0,0,0,91.17,41ZM29,31.78a8.1,8.1,0,1,1-8.09,8.09A8.09,8.09,0,0,1,29,31.78ZM63,66.51,69.68,55a37.3,37.3,0,0,0,19.66,9.61l7.07,18.2H16.16V76.63l6.74-.34,6.74-16.52L33,71.57H43.13L51.9,49,63,66.51Z"/></svg>
  `
  public SAVE_ICON=`<?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
  <path id="XMLID_311_" d="M325.607,84.667L245.333,4.394c-2.813-2.813-6.628-4.393-10.606-4.393H195.02
    C195.013,0.001,195.007,0,195,0H75c-0.006,0-0.013,0.001-0.019,0.001H15c-8.284,0-15,6.716-15,15V315c0,8.284,6.716,15,15,15h60h70
    h45.332H255h60c8.284,0,15-6.716,15-15V95.274C330,91.295,328.42,87.48,325.607,84.667z M90,30.001h90V110H90V30.001z M30,30.001h30
    V125c0,8.284,6.716,15,15,15h120c8.284,0,15-6.716,15-15V30.001h18.513L300,101.487v52.634l-19.728-19.728
    c-5.857-5.858-15.355-5.858-21.213,0L203.454,190H75c-8.284,0-15,6.716-15,15v95H30V30.001z M90,220h83.454l-39.06,39.06
    c-2.813,2.813-4.394,6.628-4.394,10.606V300H90V220z M160,300v-24.12l109.666-109.667l24.121,24.12L184.12,300H160z M255,300
    h-28.455L300,226.546V300H255z"/>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>

  `
  public SHOW_ICON = `<?xml version='1.0' encoding='utf-8'?>
  <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
    <g>
      <g>
        <path d="m251.6,185.7c-36.9,0-67,31.5-67,70.3 0,38.7 30,70.3 67,70.3 36.9,0 67-31.5 67-70.3 0-38.7-30.1-70.3-67-70.3z"/>
        <path d="m251.6,367.1c-59.4,0-107.8-49.8-107.8-111.1 0-61.3 48.4-111.1 107.8-111.1s107.8,49.8 107.8,111.1c0,61.3-48.4,111.1-107.8,111.1zm246.3-121.9c-63.8-102.4-149.8-158.8-241.9-158.8-92.1,0-178.1,56.4-241.9,158.8-4.1,6.6-4.1,15 0,21.6 63.8,102.4 149.8,158.8 241.9,158.8 92.1,0 178-56.4 241.9-158.8 4.1-6.6 4.1-15 0-21.6z"/>
      </g>
    </g>
  </svg>

  `
  public HIDE_ICON=`<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z"/></svg>`
  public WARNING_ICON=`<svg width="36px" height="36px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#FFCC4D" d="M2.653 35C.811 35-.001 33.662.847 32.027L16.456 1.972c.849-1.635 2.238-1.635 3.087 0l15.609 30.056c.85 1.634.037 2.972-1.805 2.972H2.653z"></path><path fill="#231F20" d="M15.583 28.953a2.421 2.421 0 0 1 2.419-2.418a2.421 2.421 0 0 1 2.418 2.418a2.422 2.422 0 0 1-2.418 2.419a2.422 2.422 0 0 1-2.419-2.419zm.186-18.293c0-1.302.961-2.108 2.232-2.108c1.241 0 2.233.837 2.233 2.108v11.938c0 1.271-.992 2.108-2.233 2.108c-1.271 0-2.232-.807-2.232-2.108V10.66z"></path></svg>`
  public ADDQUESTION_ICON=`<?xml version="1.0" encoding="utf-8"?>
  <!-- Uploaded to SVGRepo https://www.svgrepo.com -->
  <svg version="1.1" id="earth" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="256px" height="202px" viewBox="0 0 256 202" enable-background="new 0 0 256 202" xml:space="preserve">
  <path d="M189.103,2.162c-35.842,0-64.897,29.055-64.897,64.897c0,35.841,29.055,64.897,64.897,64.897S254,102.9,254,67.059
    C254,31.217,224.945,2.162,189.103,2.162z M189.457,111.449c-5.808,0-10.551-4.743-10.551-10.551
    c0-5.842,4.743-10.551,10.551-10.551c5.808,0,10.551,4.743,10.551,10.551C200.008,106.706,195.265,111.449,189.457,111.449z
     M214.854,60.998c-1.512,2.234-4.158,4.88-8.317,7.904l-4.158,3.024c-2.199,1.856-3.712,3.712-4.502,6.014
    c-0.447,1.512-0.79,3.78-0.79,6.805h-15.431c0.344-6.392,0.722-10.894,1.856-13.197c0.722-2.303,3.368-5.327,7.492-8.317
    l3.815-3.368c1.512-1.065,2.577-2.234,3.368-3.368c1.512-1.924,2.302-4.158,2.302-6.805c0-3.024-1.134-5.602-2.646-7.904
    c-1.512-2.234-4.537-3.368-9.039-3.368c-4.502,0-7.526,1.478-9.382,4.502c-1.512,2.234-2.646,5.258-2.646,7.904
    c0,0.447,0,0.447,0,0.79c-0.447,4.158-3.815,7.492-8.317,7.492c-4.502,0-7.973-3.368-8.317-7.526c0,0,0-1.856,0-2.646
    c1.134-9.451,4.949-16.187,11.306-20.345c4.537-2.646,10.207-4.158,16.565-4.158c8.626,0,15.774,1.856,21.445,6.014
    c5.602,4.158,8.626,10.173,9.21,18.146C218.669,53.472,217.501,57.63,214.854,60.998z M229.382,148.01l-59.641,13.668
    c-0.414,2.899-1.657,6.006-3.52,8.491c-3.52,5.384-8.905,9.319-15.117,10.976c-6.213,1.45-12.839,0.414-18.224-3.313l-51.358-32.72
    c-2.485-1.45-2.899-4.349-1.45-6.627c1.45-2.278,4.349-2.899,6.42-1.45l51.565,32.72c6.834,4.142,15.739,2.278,20.087-4.349
    c4.349-6.627,2.278-15.739-4.349-20.087l-64.197-40.589c-10.561-6.627-22.78-11.804-34.376-6.006L2,128.958l0.207,58.813
    l37.897-26.3c6.006-1.45,12.632-0.207,18.224,3.313l44.731,28.164c10.976,6.834,24.436,8.491,36.033,5.384l96.917-22.158
    c7.662-1.657,12.839-9.319,10.976-17.602C244.913,151.117,237.251,146.354,229.382,148.01z"/>
  </svg>
  `
  public SEND_ICON=`<?xml version="1.0" encoding="utf-8"?>
  <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
  <style type="text/css">
    .st0{fill:none;stroke:#b4d4e3;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    .st1{fill:none;stroke:#b4d4e3;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
  </style>
  <path class="st0" d="M26.4,2.9L3.8,15c-0.7,0.4-0.7,1.5,0.1,1.8l20.8,8.7c0.6,0.3,1.3-0.2,1.4-0.8l1.7-20.8
    C27.9,3,27.1,2.5,26.4,2.9z"/>
  <path class="st0" d="M26,4L13,20v7.3c0,0.9,1.2,1.4,1.8,0.7L19,23"/>
  </svg>

  `
  public VOTE_ICON=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.698 15.354c-.405-.031-.367-.406.016-.477.634-.117.913-.457.913-.771 0-.265-.198-.511-.549-.591-.418-.095-.332-.379.016-.406.566-.045.844-.382.844-.705 0-.282-.212-.554-.63-.61-.429-.057-.289-.367.016-.461.261-.08.677-.25.677-.755 0-.336-.25-.781-1.136-.745-.614.025-1.833-.099-2.489-.442.452-1.829.343-4.391-.845-4.391-.797 0-.948.903-1.188 1.734-.859 2.985-2.577 3.532-4.343 3.802v4.964c3.344 0 4.25 1.5 6.752 1.5 1.6 0 2.426-.867 2.426-1.333 0-.167-.136-.286-.48-.313z"/></svg>
  `
  public ANSWERS_ICON=`<?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 490.001 490.001" style="enable-background:new 0 0 490.001 490.001;" xml:space="preserve">
  <g>
    <g>
      <g>
        <path d="M450,0h-410c-22.056,0-40,17.944-40,40v280c0,22.056,17.944,40,40,40h235v120c0,4.118,2.524,7.814,6.358,9.314
          c1.184,0.463,2.417,0.687,3.639,0.687c2.738,0,5.42-1.126,7.35-3.218L409.38,360H450c22.056,0,40-17.944,40-40V40
          C490,17.944,472.057,0,450,0z M470,320c0,11.028-8.972,20-20,20h-45c-2.791,0-5.455,1.167-7.348,3.217L295,454.423V350
          c0-5.523-4.477-10-10-10h-245c-11.028,0-20-8.972-20-20V40c0-11.028,8.972-20,20-20h410c11.028,0,20,8.972,20,20V320z"/>
        <path d="M144.881,80.001c-3.957,0.047-7.513,2.423-9.072,6.06l-75,175l18.383,7.878L106.594,205h79.982l29.329,64.158
          l18.189-8.315l-80-175C152.45,82.244,148.863,79.974,144.881,80.001z M115.167,185l30.129-70.302L177.433,185H115.167z"/>
        <rect x="255.001" y="115" width="80" height="20"/>
        <rect x="350" y="115" width="60" height="20"/>
        <rect x="255.001" y="165" width="180" height="20"/>
        <rect x="255.001" y="215" width="75" height="20"/>
      </g>
    </g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>
  `
  public VIEWS_ICON=`<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill-rule="nonzero"/></svg>`
  public CLOCK_ICON=`
  <?xml version='1.0' encoding='utf-8'?>
  <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
    <g>
      <g>
        <path d="m256,51.8c-112.6,0-204.2,91.6-204.2,204.2s91.6,204.2 204.2,204.2 204.2-91.6 204.2-204.2-91.6-204.2-204.2-204.2v-1.42109e-14zm0,449.2c-135.1,0-245-109.9-245-245s109.9-245 245-245 245,109.9 245,245-109.9,245-245,245z"/>
        <path d="m327.9,276.4h-71.9c-11.3,0-20.4-9.1-20.4-20.4v-132.2c0-11.3 9.1-20.4 20.4-20.4 11.3,0 20.4,9.1 20.4,20.4v111.8h51.5c11.3,0 20.4,9.1 20.4,20.4s-9.1,20.4-20.4,20.4z"/>
      </g>
    </g>
  </svg>
`
public DELETE_ICON=`
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 458.5 458.5" style="enable-background:new 0 0 458.5 458.5;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421
				c-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508
				c32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z
				 M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501
				c0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778
				c-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657
				c10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z"/>
			<path d="M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705
				C214.249,385.607,220.965,392.323,229.249,392.323z"/>
			<path d="M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705
				C291.671,385.607,298.387,392.323,306.671,392.323z"/>
			<path d="M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705
				C136.828,385.607,143.544,392.323,151.828,392.323z"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`
public ANSWER_ICON=`
<?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.971 511.971" style="enable-background:new 0 0 511.971 511.971;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M444.771,235.493c-58.987-56.32-138.347-64-167.467-64.747V96.079c0-5.867-4.8-10.667-10.667-10.667
				c-2.453,0-4.907,0.853-6.827,2.453L78.478,237.199c-4.587,3.733-5.227,10.453-1.493,15.04c0.427,0.533,0.96,0.96,1.493,1.493
				l181.333,149.333c4.587,3.733,11.307,3.093,15.04-1.493c1.6-1.92,2.453-4.267,2.453-6.827v-77.44
				c29.76-8.107,143.893-28.693,214.613,103.787c1.813,3.52,5.44,5.653,9.387,5.653c3.413,0,6.72-1.6,8.853-4.693
				c1.28-1.813,1.813-4.053,1.813-6.293C511.865,338.639,489.251,278.053,444.771,235.493z M324.131,290.533
				c-35.52,0-60.48,8.533-61.12,8.853c-4.267,1.493-7.04,5.547-7.04,10.027v62.72l-153.92-126.72l153.92-126.72v62.72
				c0,2.88,1.173,5.653,3.307,7.68c2.133,2.027,4.907,3.093,7.893,2.987c0.96,0,97.813-3.52,163.093,58.987
				c32.107,30.72,51.52,72.32,58.027,124.16C436.665,305.679,371.171,290.533,324.131,290.533z"/>
			<path d="M199.331,387.066c-0.213-0.107-0.32-0.32-0.533-0.427L27.385,245.413l171.413-141.12
				c4.693-3.627,5.547-10.347,1.92-14.933c-3.627-4.587-10.347-5.547-14.933-1.92c-0.213,0.107-0.32,0.32-0.533,0.427L3.918,237.199
				c-4.587,3.733-5.227,10.453-1.493,15.04c0.427,0.533,0.96,0.96,1.493,1.493l181.333,149.333c4.48,3.84,11.2,3.413,15.04-0.96
				C204.131,397.626,203.705,390.906,199.331,387.066z"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`
public ARROW_DOWN_ICON=`<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 483.049 483.049" style="enable-background:new 0 0 483.049 483.049;" xml:space="preserve">
<g>
	<polygon style="fill:#005ECE;" points="0,121.155 241.524,361.894 241.524,121.155 	"/>
	<polygon style="fill:#2488FF;" points="241.524,121.155 241.524,361.894 483.049,121.155 	"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>


`
public ARROW_UP2_ICON=`<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 483.049 483.049" style="enable-background:new 0 0 483.049 483.049;" xml:space="preserve">
<g>
	<polygon style="fill:#005ECE;" points="241.524,121.155 241.524,361.894 483.049,361.894 	"/>
	<polygon style="fill:#2488FF;" points="0,361.894 241.524,361.894 241.524,121.155 	"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

`
}
