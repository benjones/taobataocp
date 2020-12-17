#!/usr/bin/env rdmd

import core.time;
import std.datetime;
import std.stdio;
import std.format;
import std.conv : to;
static import std.file;

int main(string[] args){

    if(args.length != 2){
        writeln("usage: newPost.d postTitle");
        return 1;
    }

    const currentTime = Clock.currTime();
    const dt = cast(DateTime)currentTime;
    const datestring = dt.date.toISOExtString;

    const timeString = dt.timeOfDay.toISOExtString;

    const title = args[1];

    const filename = datestring ~ '-'~title ~ ".md";
    writeln(filename);
    const utcDiff = currentTime.utcOffset.total!"hours".to!string;
    const formattedDate = datestring ~ " " ~ timeString ~ " " ~ utcDiff;

    const contents = format!`---
layout: post
title: "%s"
date: %s
categories: taobataocp
---`(title, formattedDate);

    writeln(contents);

    //std.file.write("_posts/" ~filename, contents);

    return 0;
}
