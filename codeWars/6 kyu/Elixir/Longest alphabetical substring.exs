# Find the longest substring in alphabetical order.
# Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

# There are tests with strings up to 10 000 characters long so your code will need to be efficient.
# The input will only consist of lowercase characters and will be at least one letter long.
# If there are multiple solutions, return the one that appears first.

# Solution

defmodule Kata do
  defp max_s(a,b), do: if byte_size(a) > byte_size(b), do: a, else: b

  defp helper("",a,t,r), do: max_s(t <> <<a>>,r)
  defp helper(<<b>> <> s,a,t,r) when a <= b, do: helper(s,b,t <> <<a>>,r)
  defp helper(<<b>> <> s,a,t,r), do: helper(s,b,"",max_s(t <> <<a>>,r))

  def longest(""), do: ""
  def longest(<<c>> <> s), do: helper(s,c,"","")
end
