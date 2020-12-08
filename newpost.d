#!/usr/bin/env rdmd

import std.datetime;
import std.stdio;
import std.format;
static import std.file;

int main(string[] args){

    if(args.length != 2){
        writeln("usage: newPost.d postTitle");
        return 1;
    }

    const currentTime = Clock.currTime();
    const dt = cast(DateTime)currentTime;
    const datestring = dt.date.toISOExtString;

    const title = args[1];

    const filename = datestring ~ '-'~title ~ ".md";
    writeln(filename);

    const contents = format!`---
layoue: post
title: "%s"
categories: taobataocp
---`(title);

    writeln(contents);

    std.file.write("_posts/" ~filename, contents);

    return 0;
}
