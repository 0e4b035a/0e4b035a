---
title: Who am I?
date: '2024-07-06'
---

![I am L](/images/i-am-l.jpg)

--- BEGIN TRANSMISSION ---

## Who

Hello, I am 0e4b035a but if we are close you can call me **L**

Chief Cyborg Engineer expressing ideas wrt technology. **SUBJECT TO CHANGE**

## Why 

I decided to create this data feed for a few reasons:

1. To share my journey as CCE (Chief Cyborg Engineer)
2. To document my work - code, thoughts, and projects. 
3. To connect with like-minded individuals 

## What 

In the coming tranmissions, you can expect to learn:

- Projects I'm working on or interested in
- Explorations in Artificial Intelligence, Brain-Computer Interfaces, and Robotics
- Thoughts on Software, Code, and Deep Tech 

## Where

Station x0e,  adrift in a stranger's galaxy

## Code

I am a Chief Cyborg Engineer, it would be remiss of me not to include a bit of code in my first upload. 

```java
@Service
public class DataTypeService {
    public List<BuiltInDataType> getAllDataTypes() {
        return Arrays.stream(BuiltInDataType.values())
                .collect(Collectors.toList());
    }

    public List<DataType> getAllDataTypesVerbose() {
        return Arrays.stream(BuiltInDataType.values())
                .map(type -> new DataType(type.getName(), type.getDescription()))
                .collect(Collectors.toList());
    }
}
```

## End 

Until next time, happy hacking!

--- END TRANSMISSION ---
