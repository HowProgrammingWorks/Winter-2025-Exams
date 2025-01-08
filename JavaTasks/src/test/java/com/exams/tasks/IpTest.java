package com.exams.tasks;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class IpTest {
    @Test
    public void testParseIp() {
        String ip1 = "127.0.0.1";
        int[] expected1 = {127, 0, 0, 1};
        assertArrayEquals(expected1, Ip.parse(ip1));

        String ip2 = "0.0.0.0";
        int[] expected2 = {0, 0, 0, 0};
        assertArrayEquals(expected2, Ip.parse(ip2));

        String ip3 = "255.255.255.0";
        int[] expected3 = {255, 255, 255, 0};
        assertArrayEquals(expected3, Ip.parse(ip3));

        String ip4 = "10.0.0.10";
        int[] expected4 = {10, 0, 0, 10};
        assertArrayEquals(expected4, Ip.parse(ip4));

        String ip5 = ".0.0.";
        assertNull(Ip.parse(ip5));

        String ip6 = "127001";
        assertNull(Ip.parse(ip6));

        String ip7 = "127.0.0";
        assertNull(Ip.parse(ip7));

        String ip8 = "";
        assertNull(Ip.parse(ip8));
    }

}