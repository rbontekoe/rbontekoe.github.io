# Current Project

## Online course

We started with the project `rbontekoe/RbO.jl.` to build up experience with Julia, based on the ports and adapter design pattern. The publisher-subscriber model was chosen, which resulted in the RbO.jl package. With Documenter.jl we wrote the [documentation](https://rbontekoe.github.io/RbO.jl/) for the module. It also gave us the idea to write courses with Documenter.jl, and developed a [tutorial](https://rbontekoe.github.io/tutorial_rbo/) as a test.

There are many excellent online courses nowadays. The content mainly consists of videos, and a syllabus is missing. We experience it as a problem when you quickly want to look up some code. We will try to combine these two: videos in a curriculum.

The first step is to come up with a clear course example:

- A Raspberry Pi Zero W measures every minute the temperature in a room and sends it to a laptop;
- This computer compares the latest temperature with the average of the three previous ones. If the difference is too prominent, it shows a notification on the computer. If the temperature goes below a minimum value, it also shows a warning;
- The laptop also checks whether the Zero is still alive;
- You can see the course of the temperature on the screen of the computer.

We will divide the processes on the laptop into the following specializations:
- Incoming data (JSON) listener.
- Outgoing SSH command unit.
- Alert processing unit.
- Temperature repository.
- Sensor health-monitor. Among others, the Raspberry Zeroes.
- Plotter unit.
- Display unit.

Every specialization runs in its container. The specializations communicate via channels.

Software for the Raspberry Pi Zeroes will be available on GitHub.
