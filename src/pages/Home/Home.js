import React from 'react';
import Exersice from 'src/components/exersice/Exersice.js';
import SplitDay from 'src/components/splitDay/SplitDay.js';
import './Home.css';

export default function Home() {
  return (
    <div className="master-div">
      <SplitDay name="Push Day" />
      <span className="span">
        <Exersice
          name="BENCH Press"
          src="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg"
        />
        <Exersice
          name="Incline Press"
          src="https://static.strengthlevel.com/images/illustrations/incline-dumbbell-bench-press-1000x1000.jpg"
        />
        <Exersice
          name="Shoulder Dumbbell Press"
          src="https://static.strengthlevel.com/images/illustrations/dumbbell-shoulder-press-1000x1000.jpg"
        />
      </span>
      <SplitDay name="Pull Day" />
      <span className="span">
        <Exersice
          name="Lat Pulldown"
          src="https://www.inspireusafoundation.org/wp-content/uploads/2021/10/lat-pulldown-1024x797.png"
        />
        <Exersice
          name="Meadow Rows"
          src="https://static.strengthlevel.com/images/illustrations/meadows-row-1000x1000.jpg"
        />
        <Exersice
          name="Face Pulls"
          src="https://static.strengthlevel.com/images/illustrations/face-pull-1000x1000.jpg"
        />
      </span>
      <SplitDay name="Leg Day" />
      <span className="span">
        <Exersice
          name="Squat"
          src="https://static.strengthlevel.com/images/illustrations/squat-1000x1000.jpg"
        />
        <Exersice
          name="Lunges"
          src="https://static.strengthlevel.com/images/illustrations/dumbbell-lunge-1000x1000.jpg"
        />
        <Exersice
          name="Hip Thrust"
          src="https://static.strengthlevel.com/images/illustrations/hip-thrust-1000x1000.jpg"
        />
      </span>
    </div>
  );
}
