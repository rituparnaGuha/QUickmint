import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-jitsi',
  templateUrl: './jitsi.component.html',
  styleUrls: ['./jitsi.component.css']
})
export class JitsiComponent implements OnInit, AfterViewInit  {
  domain: string = "meet.jit.si"; // For self hosted use your domain
  room: any;
  options: any;
  api: any;
  user: any;
  userData = JSON.parse(localStorage.getItem("userData")!)
      // For Custom Controls
      isAudioMuted = false;
      isVideoMuted = false;
    provider: any;
    customer: any;
  constructor(
    public dialogRef: MatDialogRef<JitsiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
    ) {}


  ngAfterViewInit(): void {
      console.log("job data: ", this.data)
      
    //   console.log("user data: ", this.userData)
    this.options = {
      roomName: this.room,
      width: 1000,
      height: 500,
      configOverwrite: { prejoinPageEnabled: false },
      interfaceConfigOverwrite: {
          // overwrite interface properties
      },
      parentNode: document.querySelector('#jitsi-iframe'),
      userInfo: {
          displayName: this.user.name
      }
  }

  this.api = new JitsiMeetExternalAPI(this.domain, this.options);

  // Event handlers
 this.api.addEventListeners({
     readyToClose: this.handleClose,
     participantLeft: this.handleParticipantLeft,
     participantJoined: this.handleParticipantJoined,
     videoConferenceJoined: this.handleVideoConferenceJoined,
     videoConferenceLeft: this.handleVideoConferenceLeft,
     audioMuteStatusChanged: this.handleMuteStatus,
     videoMuteStatusChanged: this.handleVideoStatus
 });
}


  ngOnInit(): void {
    this.provider = this.data.provider
    this.customer = this.data.user
    this.room = this.provider._id + '-' + this.customer._id; // Set your room name
    this.user = {
        name: this.userData.UserFullName // Set your username
  }

}


  onNoClick(): void {
    this.dialogRef.close();
  }

  handleClose = () => {
    console.log("handleClose");
}

handleParticipantLeft = async (participant: any) => {
    console.log("handleParticipantLeft", participant); // { id: "2baa184e" }
    const data = await this.getParticipants();
}

handleParticipantJoined = async (participant: any) => {
    console.log("handleParticipantJoined", participant); // { id: "2baa184e", displayName: "Shanu Verma", formattedDisplayName: "Shanu Verma" }
    const data = await this.getParticipants();
}

handleVideoConferenceJoined = async (participant: any) => {
    console.log("handleVideoConferenceJoined", participant); // { roomName: "bwb-bfqi-vmh", id: "8c35a951", displayName: "Akash Verma", formattedDisplayName: "Akash Verma (me)"}
    const data = await this.getParticipants();
}

handleVideoConferenceLeft = () => {
    console.log("handleVideoConferenceLeft");
    // this.router.navigate(['/thank-you']);
    this.dialogRef.close();

}

handleMuteStatus = (audio: any) => {
    console.log("handleMuteStatus", audio); // { muted: true }
}

handleVideoStatus = (video: any) => {
    console.log("handleVideoStatus", video); // { muted: true }
}

getParticipants() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(this.api.getParticipantsInfo()); // get all participants
        }, 500)
    });
}

executeCommand(command: string) {
    this.api.executeCommand(command);
    if(command == 'hangup') {
        // this.router.navigate(['/thank-you']);
        this.dialogRef.close();
        return;
    }

    if(command == 'toggleAudio') {
        this.isAudioMuted = !this.isAudioMuted;
    }

    if(command == 'toggleVideo') {
        this.isVideoMuted = !this.isVideoMuted;
    }
}
}
